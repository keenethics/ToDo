import { combineReducers } from 'redux';

import active from './active';
import itemsList from './items-list';
import commentsForAllItem from './comments-list';
import input from './input';

const appReducer = combineReducers({
  commentsForAllItem,
  itemsList,
  active,
  input,
});

const getState = (state, action) => (action.type === 'INIT'
  ? JSON.parse(localStorage.getItem('todo')) || {}
  : state);

const rootReducer = (state, action) => appReducer(getState(state, action), action);

export default rootReducer;
