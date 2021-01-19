import axios from 'axios';
import {
  SET_USER_LOGIN,
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  SET_USER_LOGOUT,
} from '../reducerTypes';

export const closeLoginModal = () => async (dispatch) => {
  try {
    dispatch({ type: CLOSE_LOGIN_MODAL });
  } catch (error) {
    console.log(error);
  }
};
export const openLoginModal = () => async (dispatch) => {
  try {
    dispatch({ type: OPEN_LOGIN_MODAL });
  } catch (error) {
    console.log(error);
  }
};

export const setUserLogin = () => async (dispatch) => {
  try {
    dispatch({ type: SET_USER_LOGIN });
    console.log('login');
  } catch (error) {
    console.log(error);
  }
};
export const setUserLogout = () => async (dispatch) => {
  try {
    dispatch({ type: SET_USER_LOGOUT });
    console.log('logout');
  } catch (error) {
    console.log(error);
  }
};
