import {
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  ADD_TO_FAVORITE_REQUEST,
  ADD_TO_FAVORITE_SUCCESS,
  ADD_TO_FAVORITE_FAILURE,
  GET_FAVORITE_LIST_FAILURE,
  GET_FAVORITE_LIST_SUCCESS,
  GET_FAVORITE_LIST_REQUEST,
  OPEN_MENU_DRAWER,
  CLOSE_MENU_DRAWER,
} from '../reducerTypes';

let initialState = {
  isLoginModalShow: false,
  loading: false,
  favoriteProducts: [],
  favoriteShops: [],
  isMenuDrawerOpen: false,
};

export const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_LOGIN_MODAL:
      return { ...state, isLoginModalShow: false };
    case OPEN_LOGIN_MODAL:
      return { ...state, isLoginModalShow: true };
    case ADD_TO_FAVORITE_REQUEST:
      return { ...state, loading: true, favoriteProducts: [] };
    case ADD_TO_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: true,
        favoriteShops: action.payload.favoriteShops,
        favoriteProducts: action.payload.favoriteProducts,
      };
    case OPEN_MENU_DRAWER:
      return {
        ...state,
        isMenuDrawerOpen: true,
      };
    case CLOSE_MENU_DRAWER:
      return {
        ...state,
        isMenuDrawerOpen: false,
      };
    case ADD_TO_FAVORITE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case GET_FAVORITE_LIST_REQUEST:
      return { ...state, loading: true, favoriteProducts: [] };
    case GET_FAVORITE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        favoriteShops: action.payload.favoriteShops,
        favoriteProducts: action.payload.favoriteProducts,
      };
    case GET_FAVORITE_LIST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
