import axios from 'axios';
import { SET_USER_LOGIN, CLOSE_LOGIN_MODAL, OPEN_LOGIN_MODAL } from '../constants/indexConstants';

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
  } catch (error) {
    console.log(error);
  }
};
