import { ADD_ITEM_TO_CHECKOUT_LIST, UPDATE_CHECKOUT_DETAIL } from '../reducerTypes';

const initialState = {
  checkoutList: [],
  checkoutDetail: {},
  discount: 0,
  totalPrice: 0,
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CHECKOUT_LIST:
      console.log('checked');
      return { ...state };
    case UPDATE_CHECKOUT_DETAIL:
      return { ...state, checkoutDetail: action.payload };
    default:
      return state;
  }
};
