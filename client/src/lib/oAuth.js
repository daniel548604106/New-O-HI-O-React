export const redirectUri = (provider) => {
  switch (provider) {
    case 'google':
      return 'https://accounts.google.com/o/oauth2/v2/auth?';
    case 'facebook':
      return 'https://www.facebook.com/v9.0/dialog/oauth?';
    case 'line':
      return `https://access.line.me/oauth2/v2.1/authorize?`;
  }
};

export const config = {
  facebook: {
    scope: 'email',
    response_type: 'code',
    redirect_uri: process.env.REACT_APP_FACEBOOK_URI,
    client_id: process.env.REACT_APP_FACEBOOK_CLIENT_ID,
  },
  google: {
    scope: 'email profile',
    response_type: 'code',
    access_type: 'offline',
    redirect_uri: process.env.REACT_APP_GOOGLE_URI,
    client_id: process.env.REACT_APP_GOOGLE_ID,
  },
  line: {
    state: 'login',
    scope: 'openid profile email',
    response_type: 'code',
    redirect_uri: process.env.REACT_APP_LINE_URI,
    client_id: process.env.REACT_APP_LINE_ID,
    nonce: '09876xyz',
  },
  // linkedin: {
  //   scope: 'r_liteprofile r_emailaddress',
  //   response_type: 'code',
  //   redirect_uri: process.env.linkedin.redirect_uri,
  //   client_id: process.env.linkedin.client_id,
  // },
  // github: {
  //   scope: 'user',
  //   response_type: 'code',
  //   redirect_uri: process.env.github.redirect_uri,
  //   client_id: process.env.github.client_id,
  // },
};
