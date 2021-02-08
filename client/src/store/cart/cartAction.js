import {
  ADD_CART_ITEM,
  CLEAR_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM_QTY,
  UPDATE_CHECKOUT_PROGRESS,
} from '../reducerTypes';
export const addToCart = (item) => {
  console.log('addToCart');
  return { type: ADD_CART_ITEM, payload: item };
};

export const removeItemFromCart = (id) => {
  console.log('remove');
  return { type: REMOVE_CART_ITEM, payload: id };
};

export const clearItemFromCart = (item) => {
  console.log('clear');
  return { type: CLEAR_CART_ITEM, payload: item };
};

export const updateCartItemQuantity = (id, qty) => {
  return { type: UPDATE_CART_ITEM_QTY, payload: { id, qty } };
};

export const updateCheckoutProgress = (step) => {
  console.log('1', step);
  return { type: UPDATE_CHECKOUT_PROGRESS, payload: step };
};
