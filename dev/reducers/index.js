import {combineReducers} from 'redux';
import ActiveState from  './reducer-data';
import LoaderState from  './reducer-loader';
import AuthState from './reducer-auth.js';

const allReducers = combineReducers({
  activeState: ActiveState,
  loaderState: LoaderState,
  authState: AuthState
});

export default allReducers;
