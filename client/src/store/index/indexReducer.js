import {
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  ADD_TO_FAVORITE_REQUEST,
  ADD_TO_FAVORITE_SUCCESS,
  ADD_TO_FAVORITE_FAILURE,
  GET_FAVORITE_LIST_FAILURE,
  GET_FAVORITE_LIST_SUCCESS,
  GET_FAVORITE_LIST_REQUEST,
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
    case GET_FAVORITE_LIST_REQUEST:
      return { loading: true, favoriteProducts: [] };
    case GET_FAVORITE_LIST_SUCCESS:
      return {
        loading: false,
        favoriteShops: action.payload.favoriteShops,
        favoriteProducts: action.payload.favoriteProducts,
      };
    case GET_FAVORITE_LIST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return initialState;
  }
};
