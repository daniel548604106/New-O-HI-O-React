import { combineReducers } from 'redux';
import { cartReducer } from './cart/cartReducer.js';
import { persistReducer } from 'redux-persist';
import { productListReducer } from './product/productReducer';
import storage from 'redux-persist/lib/storage';
import { indexReducer } from './index/indexReducer';
import userReducer from './user/userReducer';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user'], // only cart will be persisted
};

const rootReducers = combineReducers({
  productList: productListReducer,
  global: indexReducer,
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducers);
