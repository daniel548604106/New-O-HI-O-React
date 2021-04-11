import { SET_USER_LOGIN, SET_USER_LOGOUT } from '../reducerTypes';

const initialState = {
  currentUser: null,
  isUserLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOGOUT:
      return { isUserLoggedIn: false, currentUser: null };
    case SET_USER_LOGIN:
      return { isUserLoggedIn: true, currentUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
