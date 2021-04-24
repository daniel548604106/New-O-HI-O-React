// import request from '../lib/axios';
import axios from 'axios';
export const getUsers = () => {
  return axios.get('/v1/users');
};
