import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import locationStructure from './locationStructure';

export default combineReducers({
  locationStructure,
  user,
  routing: routerReducer
});
