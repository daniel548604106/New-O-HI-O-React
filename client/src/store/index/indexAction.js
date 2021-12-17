import Cookie from 'js-cookie';

import { apiAddToFavorite, apiGetFavList } from '../../api/index';
import notify from '../../lib/notification';
import {
  ADD_TO_FAVORITE_FAILURE,
  ADD_TO_FAVORITE_REQUEST,
  CLOSE_LOGIN_MODAL,
  CLOSE_MENU_DRAWER,
  GET_FAVORITE_LIST_FAILURE,
  GET_FAVORITE_LIST_REQUEST,
  GET_FAVORITE_LIST_SUCCESS,
  OPEN_LOGIN_MODAL,
  OPEN_MENU_DRAWER,
  SET_USER_LOGIN,
} from '../reducerTypes';

export const openLoginModal = () => {
  return { type: OPEN_LOGIN_MODAL };
};
export const closeLoginModal = () => {
  return { type: CLOSE_LOGIN_MODAL };
};

export const setUserLoggedIn = () => {
  return { type: SET_USER_LOGIN };
};

export const openMenuDrawer = () => {
  return {
    type: OPEN_MENU_DRAWER,
  };
};
export const closeMenuDrawer = () => {
  return {
    type: CLOSE_MENU_DRAWER,
  };
};

export const getFavList = (token) => async (dispatch) => {
  try {
    dispatch({ type: GET_FAVORITE_LIST_REQUEST });
    const { data } = await apiGetFavList(token);
    dispatch({ type: GET_FAVORITE_LIST_SUCCESS, payload: data.userFavList });
  } catch (error) {
    dispatch({ type: GET_FAVORITE_LIST_FAILURE });
  }
};

export const addToFavorite = (id, type) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST });
    const token = Cookie.get('token');
    await apiAddToFavorite(id, token, type);
    notify('已更新收藏');
    dispatch(getFavList(token));
  } catch (error) {
    dispatch({ type: ADD_TO_FAVORITE_FAILURE });
  }
};
