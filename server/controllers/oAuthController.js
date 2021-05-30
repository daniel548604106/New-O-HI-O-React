const axios = require('axios');
const qs = require('query-string');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const generateToken = require('../tools/generateToken');
const jwtDecode = require('jwt-decode')
const oAuth = async (req, res, next) => {
  try {
    const { type, code } = req.body;
    let email, name, picture, id;
    // Facebook
    const facebook_url = `https://graph.facebook.com/v9.0/oauth/access_token?`;
    const facebook_query = {
      client_id: process.env.REACT_APP_FACEBOOK_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_FACEBOOK_URI,
      client_secret: process.env.REACT_APP_FACEBOOK_CLIENT_SECRET,
      code,
    };

    // Google
    const google_url = 'https://oauth2.googleapis.com/token';
    let google_query = {
      code,
      client_id: process.env.REACT_APP_GOOGLE_ID,
      client_secret: process.env.REACT_APP_GOOGLE_SECRET,
      redirect_uri: process.env.REACT_APP_GOOGLE_URI,
      grant_type: 'authorization_code',
    };

    //Line
    const line_url = `https://api.line.me/oauth2/v2.1/token`;
    const line_query = qs.stringify({
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.REACT_APP_LINE_URI,
      client_id: process.env.REACT_APP_LINE_ID,
      client_secret: process.env.REACT_APP_LINE_SECRET,
    });
    const line_url_verify = 'https://api.line.me/oauth2/v2.1/verify';
    switch (type) {
      case 'facebook':
        // 1) Get access_token
        const { data } = await axios.get(`${facebook_url}${qs.stringify(facebook_query)}`);
        console.log(data);
        const my_token = data.access_token;
        // 2) Get User Info using access_token and fields specified
        const access_token_url = `https://graph.facebook.com/me?access_token=${my_token}&fields=name,email,picture`;
        const res = (await axios.get(access_token_url)).data;
        email = res.email;
        name = res.name;
        picture = res.picture.data.url;
        id = res.id;

        console.log('email', email, name, picture);
        break;
      case 'google':
        console.log('gogosd',console.log(qs.stringify(google_query)))
        const google_res = await axios.post(google_url, `${qs.stringify(google_query)}`, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        console.log(google_res)
        const google_userInfo = jwtDecode(google_res.data.id_token);
        console.log(google_userInfo)
        email = google_userInfo.email;
        name = google_userInfo.name;
        picture = google_userInfo.picture;
       

        
        break;
      case 'line':
        const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
        const line_res = await axios.post(line_url, line_query, config);
        const { access_token, expires_in, id_token } = line_res.data;

        // 取得 Email
        const verified = await axios.post(
          line_url_verify,
          qs.stringify({ id_token, client_id: process.env.REACT_APP_LINE_ID }),
          config,
        );
        const verified_data = verified.data;
        email = verified_data.email;
        name = verified_data.name;
        picture = verified_data.picture;
        console.log('data', line_res.data);
        console.log('verified', verified.data);
        console.log('picture',verified.data.picture)
        break;
    }
    console.log('email', email);
    

    // 3) Check if user exists in  DB
    const user = await User.findOne({ email });
    if(user) {
      user.picture = picture
    }

    if (!user) {
      const newUser = await User.create({
        email,
        name,
        picture,
        [type]: { id, email, name, picture },
      });

      const token = generateToken(newUser._id);

      return res.status(200).json({
        token,
        user: newUser,
      });
    }

    if (user && !user[type]) {
      user[type] = { id, email, name, picture };
      await user.save();
      const token = generateToken(user._id);
      return res.status(200).json({
        token,
        user,
      });
    }
    console.log(user);

    const token = generateToken(user._id);

    res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { oAuth };
