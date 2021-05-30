import { SET_ACTIVE_CHAT, TOGGLE_CHAT } from '../reducerTypes';

const initialState = {
  activeChat: 0,
  showChat: false,
};
const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CHAT:
      return { ...state, activeChat: action.payload };
    case TOGGLE_CHAT:
      return { ...state, showChat: !state.showChat };
    default:
      return initialState;
  }
};

export default chatReducer;
