import { ADD_CART_ITEM, CLEAR_CART_ITEM, REMOVE_CART_ITEM } from '../reducerTypes';
import {
  addItemToCart,
  removeItemFromCart,
  getCartItemsFromLocalStorage,
  saveCartItemsToLocalStorage,
  clearItemFromCart,
} from './cartUtils';

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      console.log('add');
      saveCartItemsToLocalStorage({
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      });
      return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };
    case REMOVE_CART_ITEM:
      console.log('remove');
      saveCartItemsToLocalStorage({
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      });
      return { ...state, cartItems: removeItemFromCart(state.cartItems, action.payload) };

    case CLEAR_CART_ITEM:
      console.log('clear');
      saveCartItemsToLocalStorage({
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      });
      return { ...state, cartItems: clearItemFromCart(state.cartItems, action.payload) };
    default:
      return state;
  }
};
