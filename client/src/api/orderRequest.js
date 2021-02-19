import axios from 'axios';
import Cookie from 'js-cookie';
const token = Cookie.get('token');
export const postNewOrder = (data) => {
  console.log('hhihi');
  return axios.post('/v1/orders', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
