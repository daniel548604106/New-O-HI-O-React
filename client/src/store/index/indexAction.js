import {
  SET_USER_LOGIN,
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  SET_USER_LOGOUT,
  ADD_FAV_SHOP,
  ADD_FAV_PRODUCT_REQUEST,
  ADD_FAV_PRODUCT_SUCCESS,
  ADD_FAV_PRODUCT_FAILURE,
} from '../reducerTypes';

import { apiAddFavProduct } from '../../api/index';

export const openLoginModal = () => {
  return { type: OPEN_LOGIN_MODAL };
};
export const closeLoginModal = () => {
  return { type: CLOSE_LOGIN_MODAL };
};

export const setUserLoggedIn = () => {
  return { type: SET_USER_LOGIN };
};

export const addFavProduct = (id, token) => async (dispatch) => {
  try {
    console.log('hihihi');
    dispatch({ type: ADD_FAV_PRODUCT_REQUEST });
    const { data } = await apiAddFavProduct(id, token);
    dispatch({ type: ADD_FAV_PRODUCT_SUCCESS, payload: data.user.favoriteItems });
  } catch (error) {
    dispatch({ type: ADD_FAV_PRODUCT_FAILURE });
    console.log(error);
  }
};

export const addFavShop = () => {
  return { type: ADD_FAV_SHOP };
};
