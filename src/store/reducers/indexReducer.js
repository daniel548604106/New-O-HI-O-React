import {
  SET_USER_LOGIN,
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  SET_USER_LOGOUT,
} from '../constants/indexConstants';

let initialState = {
  isUserLoggedIn: false,
  isLoginModalShow: false,
};

export const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_LOGIN_MODAL:
      return { isLoginModalShow: false };
    case OPEN_LOGIN_MODAL:
      return { isLoginModalShow: true };
    case SET_USER_LOGOUT:
      return { isUserLoggedIn: false };
    case SET_USER_LOGIN:
      return { isUserLoggedIn: true };
    default:
      return initialState;
  }
};
