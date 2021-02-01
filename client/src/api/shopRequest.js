import axios from 'axios';

export const getHotShop = async () => {
  return await axios.get('/v1/shops/hot');
};
