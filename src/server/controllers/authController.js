const axios = require('axios');
const qs = require('query-string');
const jwt = require('jsonwebtoken');
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
    const user = (await axios.get(access_token_url)).data;

    // 3) Check if user exists in  DB
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { authFacebook };
