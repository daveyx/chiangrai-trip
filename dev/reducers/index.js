import {combineReducers} from 'redux';
import ActiveState from  './reducer-data';

const allReducers = combineReducers({
  activeState: ActiveState
});

export default allReducers;
