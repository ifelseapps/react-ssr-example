import React from 'react';
import { hydrate } from 'react-dom';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

delete (window as any).__STORE_INITIAL_DATA__;

const container = document.getElementById('app');

if (container) {
  hydrate(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,
    container,
  );
}
