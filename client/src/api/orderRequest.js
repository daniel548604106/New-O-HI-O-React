import axios from 'axios';
import Cookie from 'js-cookie';
const token = Cookie.get('token');
export const postNewOrder = (data) => {
  return axios.post('/v1/orders', data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const getAllOrders = (data) => {
  return axios.get('/v1/orders', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
