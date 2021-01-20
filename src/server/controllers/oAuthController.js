const axios = require('axios');
const qs = require('query-string');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const oAuth = async (req, res, next) => {
  try {
    const { type, code } = req.body;
    let email, name, picture, id;
    const facebook_url = `https://graph.facebook.com/v9.0/oauth/access_token?`;
    const facebook_query = {
      client_id: process.env.REACT_APP_FACEBOOK_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_FACEBOOK_URI,
      client_secret: process.env.REACT_APP_FACEBOOK_CLIENT_SECRET,
      code,
    };
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
        picture = res.picture;
        id = res.id;

        console.log('email', email, name, picture);
        break;
    }
    console.log('emaileamil', email);

    // 3) Check if user exists in  DB
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      const newUser = await User.create({
        email,
        name,
        picture: picture.data.url,
        facebook: { id, email, name, picture: picture.data.url },
      });

      return res.status(200).json({
        newUser,
      });
    }

    if (user && !user[type]) {
      user[type] = { id, email, name, picture: picture.data.url };
      await user.save();

      return res.status(200).json({
        user,
      });
    }
    console.log(user);

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { oAuth };
