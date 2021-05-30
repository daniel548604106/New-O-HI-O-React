import axios from 'axios';
import Cookie from 'js-cookie';
const token = Cookie.get('token');
export const patchChat = async (id) => {
  return await axios.patch(
    '/v1/chat',
    { id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const getAllChats = async () => {
  return axios.get('/v1/chat', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getChat = async (chatId) => {
  return axios.get(`/v1/chat/${chatId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
