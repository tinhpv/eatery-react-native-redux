import {combineReducers} from 'redux';
import businessesReducer from './businessesReducer';
import businessDetailReducer from './businessDetailReducer';

export default combineReducers({
  businesses: businessesReducer,
  details: businessDetailReducer,
});
