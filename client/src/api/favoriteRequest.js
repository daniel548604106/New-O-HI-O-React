import axios from 'axios';

export const addToFavorite = async (id, token, type) => {
  return await axios.patch(
    '/v1/favorite',
    { id, type },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

// export const addFavShop = async (shopId, token) => {
//   return await axios.patch(
//     '/v1/favorite/shops',
//     {
//       shopId,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     },
//   );
// };

export const getFavProducts = async (token) => {
  console.log('get Products');
  return await axios.get('/v1/favorite/products', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
