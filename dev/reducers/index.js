import {combineReducers} from 'redux';
import ActiveState from  './reducer-data';
import LoaderState from  './reducer-loader';

const allReducers = combineReducers({
  activeState: ActiveState,
  loaderState: LoaderState
});

export default allReducers;
