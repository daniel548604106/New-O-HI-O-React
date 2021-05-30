import axios from 'axios';

export const getAllProducts = (query) => {
  return axios.get(`/v1/products?${query}`);
};
export const getDiscountedProducts = () => {
  return axios.get('/v1/products/discount');
};
export const getProduct = (id) => {
  return axios.get(`/v1/products/product/${id}`);
};

export const getRecommendedProducts = () => {
  return axios.get(`/v1/products/recommendation`);
};

export const getCollectionProducts = (collection) => {
  return axios.get(`v1/products/collection/${collection}`);
};
