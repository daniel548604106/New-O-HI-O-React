import axios from 'axios';

export const getBanners = async () => {
  return await axios.get(`/v1/banners`);
};
