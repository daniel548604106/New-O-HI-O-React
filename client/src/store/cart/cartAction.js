import notify from '../../lib/notification';
import {
  ADD_CART_ITEM,
  CLEAR_CART_ITEM,
  REMOVE_CART_ITEM,
  RESET_CART_ITEM,
  UPDATE_CART_ITEM_QTY,
  UPDATE_CHECKOUT_PROGRESS,
} from '../reducerTypes';
export const addToCart = (item) => {
  notify('已加入購物車');
  return { type: ADD_CART_ITEM, payload: item };
};

export const removeItemFromCart = (id) => {
  return { type: REMOVE_CART_ITEM, payload: id };
};

export const clearItemFromCart = (item) => {
  return { type: CLEAR_CART_ITEM, payload: item };
};

export const updateCartItemQuantity = (id, qty) => {
  return { type: UPDATE_CART_ITEM_QTY, payload: { id, qty } };
};

export const updateCheckoutProgress = (step) => {
  return { type: UPDATE_CHECKOUT_PROGRESS, payload: step };
};

export const resetCartItems = () => {
  return { type: RESET_CART_ITEM };
};
