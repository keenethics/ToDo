import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './styles/app.scss';

import reducer from './js/reducers/index.js';

import Main from './js/components/main';

const store = createStore(reducer);

store.dispatch({ type: 'INIT' });

window.addEventListener('beforeunload', () => {
  const state = JSON.stringify(store.getState());

  localStorage.setItem('todo', state);
});

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
