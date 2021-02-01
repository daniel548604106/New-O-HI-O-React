import axios from 'axios';

export const getUserData = async (id) => {
  return await axios.get(`/user/${id}`);
};
