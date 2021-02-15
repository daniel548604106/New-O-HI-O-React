import { combineReducers } from 'redux';
import { cartReducer } from './cart/cartReducer.js';
import { persistReducer } from 'redux-persist';
import { productListReducer } from './product/productReducer';
import storage from 'redux-persist/lib/storage';
import { indexReducer } from './index/indexReducer';
import { checkoutReducer } from './checkout/checkoutReducer';
import chatReducer from './chat/chatReducer.js';
import userReducer from './user/userReducer';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user', 'global', 'checkout'], // only cart will be persisted
};

import { SET_USER_LOGOUT } from './reducerTypes';

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
