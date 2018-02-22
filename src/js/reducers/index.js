import { combineReducers } from 'redux';

import active from './active';
import itemsList from './items-list';
import commentsForAllItem from './comments-list';

const appReducer = combineReducers({
  commentsForAllItem,
  itemsList,
  active
});

const rootReducer = (state, action) => {
  if (action.type === 'INIT') {
    const startState = JSON.parse(localStorage.getItem('todo'));

    state = startState || {};
  }

  return appReducer(state, action);
};

export default rootReducer;
