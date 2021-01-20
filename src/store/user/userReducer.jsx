import {
  SET_USER_LOGIN,
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  SET_USER_LOGOUT,
} from '../reducerTypes';

const initialState = {
  currentUser: {},
  isUserLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    case SET_USER_LOGOUT:
      return { isUserLoggedIn: false, currentUser: null };
    case SET_USER_LOGIN:
      return { isUserLoggedIn: true, currentUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
