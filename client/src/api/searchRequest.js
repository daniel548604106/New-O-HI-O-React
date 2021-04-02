import axios from 'axios';

export const getSearchedProducts = (text) => {
  console.log('text', text);
  return axios.get(`/v1/search?text=${text}`);
};
