import axios from 'axios';

export const addFavProduct = async (productId, token) => {
  return await axios.patch(
    `/v1/favorite/products`,
    { productId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const getFavProducts = async (token) => {
  console.log('get Products');
  return await axios.get('/v1/favorite/products', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
