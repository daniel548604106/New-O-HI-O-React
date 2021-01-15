import { SET_USER_LOGIN, CLOSE_LOGIN_MODAL, OPEN_LOGIN_MODAL } from '../constants/indexConstants';

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
    case SET_USER_LOGIN:
      return { isUserLoggedIn };
    default:
      return initialState;
  }
};
