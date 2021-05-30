import {
  ADD_ITEM_TO_CHECKOUT_LIST,
  RESET_CHECKOUT_LIST,
  UPDATE_CHECKOUT_DETAIL,
  UPDATE_SUBTOTAL,
  UPDATE_TOTAL,
} from '../reducerTypes';
const initialState = {
  checkoutList: [],
  checkoutDetail: {},
  discount: 0,
  total: 0,
  subtotal: 0,
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CHECKOUT_LIST:
      return { ...state, checkoutList: action.payload };
    case UPDATE_SUBTOTAL:
      return { ...state, subtotal: action.payload };
    case UPDATE_TOTAL:
      return { ...state, total: state.subtotal - state.discount };
    case UPDATE_CHECKOUT_DETAIL:
      return { ...state, checkoutDetail: action.payload || checkoutDetail };
    case RESET_CHECKOUT_LIST:
      return initialState;
    default:
      return state;
  }
};
