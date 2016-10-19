import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import session from '../reducers/session';

export default combineReducers({
  routing: routerReducer,
  session,
});
