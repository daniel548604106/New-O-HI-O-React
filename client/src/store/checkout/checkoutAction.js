import { ADD_ITEM_TO_CHECKOUT_LIST, UPDATE_CHECKOUT_DETAIL } from '../reducerTypes';

export const addItemToCheckoutList = () => {
  return { type: ADD_ITEM_TO_CHECKOUT_LIST };
};

export const updateCheckoutDetail = (checkoutDetail) => {
  console.log('updated');
  return { type: UPDATE_CHECKOUT_DETAIL, payload: checkoutDetail };
};
