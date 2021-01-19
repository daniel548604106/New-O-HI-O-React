import axios from 'axios';

import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    console.log('ihihi');
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(data);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PRODUCT_LIST_FAIL });
  }
};
