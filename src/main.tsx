import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from '@/store/store';

import { App } from './app';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
