import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {loadState, saveState} from './localStorage.js';
import App from './containers/App';
import gameReducer from './reducers/gameReducer';

const persistedState = loadState();
const store = createStore(
  gameReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
