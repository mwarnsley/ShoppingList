import {combineReducers} from 'redux';

import {searchReducer} from './searchReducer';
import {loadingReducer} from './loadingReducer';
import {cartReducer} from './cartReducer';

// Combining the reducers
export default combineReducers({
  search: searchReducer,
  loading: loadingReducer,
  cart: cartReducer,
});
