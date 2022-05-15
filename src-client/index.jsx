import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './i18n';

ReactDOM.render(
  <Suspense fallback={<div className="App" />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
registerServiceWorker();
