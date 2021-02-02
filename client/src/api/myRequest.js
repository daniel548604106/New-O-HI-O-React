import axios from 'axios';

export const patchMyData = (data, token) => {
  console.log('hi');
  return axios.patch('/v1/my', data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
