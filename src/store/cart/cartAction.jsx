import { ADD_CART_ITEM, REMOVE_CART_ITEM } from '../reducerTypes';
export const addToCart = (item) => {
  console.log('addToCart');
  return { type: ADD_CART_ITEM, payload: item };
};

export const removeItemFromCart = (idx) => {
  return { type: REMOVE_CART_ITEM, payload: idx };
};
