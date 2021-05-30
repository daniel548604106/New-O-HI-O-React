import axios from 'axios';

export const getSearchedProducts = (text) => {
  return axios.get(`/v1/search?text=${text}`);
};
