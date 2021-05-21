import axios from 'axios';

//註冊

export const postSignup = async (data) => {
  return await axios.post('/v1/auth/signup', data);
};

//登入

export const postLogin = (data) => {
  return axios.post('/v1/auth/login', data);
};

// 社群登入

export const postOAuthLogin = (data) => {
  return axios.post('/v1/oauth/login', data);
};

// 登出
export const postLogout = (token) =>
  axios.post(
    '/v1/auth/logout',
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
