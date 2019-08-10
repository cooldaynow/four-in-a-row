import React from 'react';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducers from './reducers';

const store = createStore(rootReducers);

render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
