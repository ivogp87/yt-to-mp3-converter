import React from 'react';
import ReactDOM from 'react-dom';

// GLOBAL STYLES! Adds Normalize.css, Google fonts, reset rules, utility styles
import './index.css';

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
