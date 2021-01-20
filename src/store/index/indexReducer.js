import { CLOSE_LOGIN_MODAL, OPEN_LOGIN_MODAL } from '../reducerTypes';

let initialState = {
  isLoginModalShow: false,
};

export const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_LOGIN_MODAL:
      return { isLoginModalShow: false };
    case OPEN_LOGIN_MODAL:
      return { isLoginModalShow: true };
    default:
      return initialState;
  }
};
