import axios from 'axios';

export const getHotShop = async () => {
  return await axios.get('/v1/shops/hot');
};

export const getShopProducts = async (account) => {
  return await axios.get(`/v1/shops/${account}/products`);
};

export const getShopInfo = (account) => {
  return axios.get(`/v1/shops/${account}`);
};
