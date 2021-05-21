import {
  ADD_CART_ITEM,
  CLEAR_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM_QTY,
  RESET_CART_ITEM,
  UPDATE_CHECKOUT_PROGRESS,
} from '../reducerTypes';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  updateCartItemQuantity,
} from './cartUtils';

const initialState = {
  checkoutProgress: 1,
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHECKOUT_PROGRESS:
      return { ...state, checkoutProgress: action.payload };
    case ADD_CART_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };
    case REMOVE_CART_ITEM:
      return { ...state, cartItems: removeItemFromCart(state.cartItems, action.payload) };
    case UPDATE_CART_ITEM_QTY:
      return {
        ...state,
        cartItems: updateCartItemQuantity(state.cartItems, action.payload),
      };
    case CLEAR_CART_ITEM:
      return { ...state, cartItems: clearItemFromCart(state.cartItems, action.payload) };
    case RESET_CART_ITEM:
      return initialState;
    default:
      return state;
  }
};
