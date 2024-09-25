// ./client/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// rendering app with react
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // will be rendered in root
); // react