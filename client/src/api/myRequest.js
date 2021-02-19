import axios from 'axios';
import Cookie from 'js-cookie';

const token = Cookie.get('token');

export const patchMyData = (data) => {
  console.log('hi');
  return axios.patch('/v1/my', data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const patchMyPhoto = (data) => {
  console.log('data');
  return axios.patch('/v1/my/photo', data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
