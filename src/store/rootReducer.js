import { combineReducers } from 'redux';
import { cartReducer } from './cart/cartReducer.jsx';
import { productListReducer } from './product/productReducer';
import { indexReducer } from './reducers/indexReducer';
import userReducer from './user/userReducer';
const reducers = combineReducers({
  productList: productListReducer,
  login: indexReducer,
  user: userReducer,
  cart: cartReducer,
});

export default reducers;
