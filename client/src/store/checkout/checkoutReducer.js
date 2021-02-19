import { ADD_ITEM_TO_CHECKOUT_LIST, UPDATE_CHECKOUT_DETAIL } from '../reducerTypes';
import { addItemToCheckoutList } from './checkoutUtils';
const initialState = {
  checkoutList: [],
  checkoutDetail: {},
  discount: 0,
  totalPrice: 0,
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CHECKOUT_LIST:
      console.log('add', 'state', state, action.payload);
      return { ...state, checkoutList: addItemToCheckoutList(state.checkoutList, action.payload) };
    case UPDATE_CHECKOUT_DETAIL:
      return { ...state, checkoutDetail: action.payload || checkoutDetail };
    default:
      return state;
  }
};
