import { ADD_CART_ITEM, CLEAR_CART_ITEM, REMOVE_CART_ITEM } from '../reducerTypes';
export const addToCart = (item) => {
  console.log('addToCart');
  return { type: ADD_CART_ITEM, payload: item };
};

export const removeItemFromCart = (item) => {
  console.log('remove');
  return { type: REMOVE_CART_ITEM, payload: item };
};

export const clearItemFromCart = (item) => {
  console.log('clear');
  return { type: CLEAR_CART_ITEM, payload: item };
};
