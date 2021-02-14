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

const rootReducers = combineReducers({
  chat: chatReducer,
  productList: productListReducer,
  global: indexReducer,
  user: userReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
});

export default persistReducer(persistConfig, rootReducers);
