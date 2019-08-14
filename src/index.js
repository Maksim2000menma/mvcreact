import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Footer';
import { HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
  <HashRouter>
  <App />
  </ HashRouter>
  </div>
  , document.getElementById('root'));
serviceWorker.unregister();
