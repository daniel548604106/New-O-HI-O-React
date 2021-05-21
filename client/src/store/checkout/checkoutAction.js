import {
  ADD_ITEM_TO_CHECKOUT_LIST,
  RESET_CHECKOUT_LIST,
  UPDATE_CHECKOUT_DETAIL,
  UPDATE_SUBTOTAL,
  UPDATE_TOTAL,
} from '../reducerTypes';

export const addItemToCheckoutList = (checkoutList) => {
  return { type: ADD_ITEM_TO_CHECKOUT_LIST, payload: checkoutList };
};

export const updateCheckoutDetail = (checkoutDetail) => {
  return { type: UPDATE_CHECKOUT_DETAIL, payload: checkoutDetail };
};

export const updateSubtotal = (subtotal) => {
  return { type: UPDATE_SUBTOTAL, payload: subtotal };
};
export const updateTotal = () => {
  return { type: UPDATE_TOTAL };
};

export const resetCheckoutList = () => {
  return { type: RESET_CHECKOUT_LIST };
};
