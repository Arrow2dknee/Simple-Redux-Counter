
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import multiplyReducer from './reducers';
const renderRoot = document.getElementById('root');
const store = createStore(multiplyReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, renderRoot);