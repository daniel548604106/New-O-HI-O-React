import {
  SET_USER_LOGIN,
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  GET_FAV_PRODUCT_REQUEST,
  GET_FAV_PRODUCT_SUCCESS,
  GET_FAV_PRODUCT_FAILURE,
  ADD_TO_FAVORITE_REQUEST,
  ADD_TO_FAVORITE_FAILURE,
  GET_FAVORITE_LIST_REQUEST,
  GET_FAVORITE_LIST_SUCCESS,
  GET_FAVORITE_LIST_FAILURE,
} from '../reducerTypes';

import Cookie from 'js-cookie';
import notify from '../../lib/notification';
import { apiAddToFavorite, apiGetFavList } from '../../api/index';

export const openLoginModal = () => {
  return { type: OPEN_LOGIN_MODAL };
};
export const closeLoginModal = () => {
  return { type: CLOSE_LOGIN_MODAL };
};

export const setUserLoggedIn = () => {
  return { type: SET_USER_LOGIN };
};

export const getFavList = (token) => async (dispatch) => {
  try {
    dispatch({ type: GET_FAVORITE_LIST_REQUEST });
    const { data } = await apiGetFavList(token);
    console.log(data);
    dispatch({ type: GET_FAVORITE_LIST_SUCCESS, payload: data.userFavList });
  } catch (error) {
    dispatch({ type: GET_FAVORITE_LIST_FAILURE });
    console.log(error);
  }
};

export const addToFavorite = (id, type) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST });
    const token = Cookie.get('token');
    const { data } = await apiAddToFavorite(id, token, type);
    notify('已更新收藏');
    dispatch(getFavList(token));
  } catch (error) {
    dispatch({ type: ADD_TO_FAVORITE_FAILURE });
    console.log(error);
  }
};
