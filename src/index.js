import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './styles/app.scss';

import reducer from './js/reducers/index';

import Main from './js/components/main';

/* eslint-disable */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

store.dispatch({ type: 'INIT' });

window.addEventListener('beforeunload', () => {
  const state = JSON.stringify(store.getState());

  localStorage.setItem('todo', state);
});

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app'),
);
