import {
  SET_USER_LOGIN,
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  GET_FAV_PRODUCT_REQUEST,
  GET_FAV_PRODUCT_SUCCESS,
  GET_FAV_PRODUCT_FAILURE,
  ADD_TO_FAVORITE_REQUEST,
  ADD_TO_FAVORITE_FAILURE,
} from '../reducerTypes';

import Cookie from 'js-cookie';

import { apiAddToFavorite, apiGetFavProducts } from '../../api/index';

export const openLoginModal = () => {
  return { type: OPEN_LOGIN_MODAL };
};
export const closeLoginModal = () => {
  return { type: CLOSE_LOGIN_MODAL };
};

export const setUserLoggedIn = () => {
  return { type: SET_USER_LOGIN };
};

export const getFavProducts = (token) => async (dispatch) => {
  try {
    dispatch({ type: GET_FAV_PRODUCT_REQUEST });
    const { data } = await apiGetFavProducts(token);
    dispatch({ type: GET_FAV_PRODUCT_SUCCESS, payload: data.userFavList.favoriteItems });
  } catch (error) {
    dispatch({ type: GET_FAV_PRODUCT_FAILURE });
    console.log(error);
  }
};

export const addToFavorite = (id, type) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST });
    const token = Cookie.get('token');
    const { data } = await apiAddToFavorite(id, token, type);
    dispatch(getFavProducts(token));
  } catch (error) {
    dispatch({ type: ADD_TO_FAVORITE_FAILURE });
    console.log(error);
  }
};
// export const addFavShop = (id) => async (dispatch) => {
//   try {
//     console.log('added');
//     dispatch({ type: ADD_FAV_SHOP_REQUEST });
//     const token = Cookie.get('token');
//     const { data } = await apiAddFavShop(id, token);
//     console.log(data);
//     dispatch(getFavProducts(token));
//   } catch (error) {
//     dispatch({ type: ADD_FAV_SHOP_FAILURE });
//     console.log(error);
//   }
// };
