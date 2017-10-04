import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import locationStructure from './locationStructure';
import locations from './locations';

export default combineReducers({
  locationStructure,
  user,
  locations,
  routing: routerReducer
});
