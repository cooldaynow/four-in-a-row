import React from 'react';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducers from './reducers';

const store = createStore(rootReducers, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
