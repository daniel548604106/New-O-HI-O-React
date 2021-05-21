import { SET_ACTIVE_CHAT, TOGGLE_CHAT } from '../reducerTypes';

export const setActiveChat = (index) => {
  return { type: SET_ACTIVE_CHAT, payload: index };
};

export const toggleChat = () => {
  return { type: TOGGLE_CHAT };
};
