const axios = require('axios');
const qs = require('query-string');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const authFacebook = async (req, res, next) => {
  try {
    let code;
    if (req.query) {
      code = req.query.code;
    }
    // 1) Get access_token
    const url = `https://graph.facebook.com/v9.0/oauth/access_token?`;
    const query = {
      client_id: process.env.REACT_APP_FACEBOOK_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_FACEBOOK_URI,
      client_secret: process.env.REACT_APP_FACEBOOK_CLIENT_SECRET,
      code,
    };
    const { data } = await axios.get(`${url}${qs.stringify(query)}`);
    const my_token = data.access_token;
    // 2) Get User Info using access_token and fields specified
    const access_token_url = `https://graph.facebook.com/me?access_token=${my_token}&fields=name,email,picture`;
    const { email, name, picture, id } = (await axios.get(access_token_url)).data;
    console.log(email, name, picture);
    // 3) Check if user exists in  DB
    const user = await User.findOne({ email });

    if (!user) {
      const newUser = await User.create({
        email,
        name,
        picture: picture.data.url,
        facebook: { id, email, name, picture: picture.data.url },
      });

      return res.redirect(`${process.env.REDIRECT_URI}?userId=${newUser._id}`);
    }

    if (user && !user.facebook) {
      user.facebook = { id, email, name, picture: picture.data.url };
      await user.save();

      res.redirect(`${process.env.REDIRECT_URI}?userId=${user._id}`);
    }
    console.log(user);

    res.redirect(`${process.env.REDIRECT_URI}?userId=${user._id}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { authFacebook };
