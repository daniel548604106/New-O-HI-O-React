import { ADD_ITEM_TO_CHECKOUT_LIST } from '../reducerTypes';

const initialState = {
  checkoutList: [],
  deliveryMethod: '',
  paymentMethod: '',
  discount: 0,
  totalPrice: 0,
  personalInfo: {
    name: '',
    phone: '',
    email: '',
  },
  invoice: {
    type: '',
    ordererFullName: '',
    ordererEmail: '',
  },
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CHECKOUT_LIST:
      console.log('checked');
      return { ...state };
    default:
      return state;
  }
};
