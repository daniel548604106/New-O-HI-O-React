import Cookie from 'js-cookie';

import { SET_USER_LOGIN, SET_USER_LOGOUT } from '../reducerTypes';

export const setUserLoggedIn = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
  return { type: SET_USER_LOGIN, payload: user };
};
export const setUserLogout = (user) => {
  Cookie.remove('me');
  Cookie.remove('token');
  localStorage.removeItem('user');
  return { type: SET_USER_LOGOUT };
};
