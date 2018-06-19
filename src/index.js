import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Room from './Room';
import './index.css';

const initialState = {
  isLit: false
};

const store = createStore(reducer);

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_LIGHT':
      return {
        isLit: !state.isLit
      };
    default:
      return state;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Room />
  </Provider>,
  document.getElementById('root')
);
