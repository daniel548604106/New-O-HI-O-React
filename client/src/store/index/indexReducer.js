import {
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  ADD_FAV_SHOP,
  ADD_FAV_PRODUCT_REQUEST,
  ADD_FAV_PRODUCT_SUCCESS,
  ADD_FAV_PRODUCT_FAILURE,
  GET_FAV_PRODUCT_REQUEST,
  GET_FAV_PRODUCT_SUCCESS,
  GET_FAV_PRODUCT_FAILURE,
  ADD_FAV_SHOP_REQUEST,
  ADD_FAV_SHOP_SUCCESS,
  ADD_FAV_SHOP_FAILURE,
  ADD_TO_FAVORITE_REQUEST,
  ADD_TO_FAVORITE_SUCCESS,
  ADD_TO_FAVORITE_FAILURE,
} from '../reducerTypes';

let initialState = {
  isLoginModalShow: false,
  loading: false,
  favoriteProducts: [],
  favoriteShops: [],
};

export const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_LOGIN_MODAL:
      return { isLoginModalShow: false };
    case OPEN_LOGIN_MODAL:
      return { isLoginModalShow: true };
    case ADD_TO_FAVORITE_REQUEST:
      return { loading: true, favoriteProducts: [] };
    case ADD_TO_FAVORITE_SUCCESS:
      return {
        loading: true,
        favoriteShops: action.payload.favoriteShops,
        favoriteProducts: action.payload.favoriteProducts,
      };
    case ADD_TO_FAVORITE_FAILURE:
      return { loading: false, error: action.payload };
    case GET_FAV_PRODUCT_REQUEST:
      return { loading: true, favoriteProducts: [] };
    case GET_FAV_PRODUCT_SUCCESS:
      return { loading: false, favoriteProducts: action.payload };
    case GET_FAV_PRODUCT_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return initialState;
  }
};
