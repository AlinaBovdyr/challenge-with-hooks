import { combineReducers } from 'redux';
import { items } from './items';
import { loading } from './loading';
import { error } from './error';

export default combineReducers({
  items,
  loading,
  error
});
