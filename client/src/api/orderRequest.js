import axios from 'axios';

export const postNewOrder = (data) => {
  return axios.post('/v1/orders', data);
};
