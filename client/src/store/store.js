import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import reducers from './rootReducer';
import logger from 'redux-logger';
const initialState = {};
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);
