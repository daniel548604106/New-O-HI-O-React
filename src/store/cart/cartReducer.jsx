import { ADD_CART_ITEM, REMOVE_CART_ITEM } from '../reducerTypes';
import { addItemToCart, removeItemFromCart } from './cartUtils';

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };
    case REMOVE_CART_ITEM:
      return { ...state, cartItems: removeItemFromCart(state.cartItems, action.payload) };
    default:
      return state;
  }
};
