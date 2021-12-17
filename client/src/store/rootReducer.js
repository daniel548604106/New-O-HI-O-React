import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cartReducer } from './cart/cartReducer.js';
import chatReducer from './chat/chatReducer.js';
import { checkoutReducer } from './checkout/checkoutReducer';
import { indexReducer } from './index/indexReducer';
import { productListReducer } from './product/productReducer';
import { SET_USER_LOGOUT } from './reducerTypes';
import userReducer from './user/userReducer';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user', 'global', 'checkout'], // only cart will be persisted
};

const rootReducers = combineReducers({
  chat: chatReducer,
  productList: productListReducer,
  global: indexReducer,
  user: userReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
});

const appReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === SET_USER_LOGOUT) state = undefined;

  return rootReducers(state, action);
};

export default persistReducer(persistConfig, appReducer);
