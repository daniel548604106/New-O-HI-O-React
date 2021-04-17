import axios from 'axios';

export const getUserData = async (id) => {
  return await axios.get(`/v1/users/user/${id}`);
};
