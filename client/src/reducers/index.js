import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import products from './products';
import fix from './fix';

export default combineReducers({
  alert,
  auth,
  profile,
  products,
  fix
});
