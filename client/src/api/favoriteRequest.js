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

export const getFavList = async (token) => {
  return await axios.get('/v1/favorite', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
