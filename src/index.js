import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// import promiseMiddleware from 'redux-promise-middleware';

import 'whatwg-fetch';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import rootReducer from './reducers';

import apiMiddleware from './middlewares/apiMiddleware';
import questionPaperSaga from './questionpaper/sagas';
import questionBankSaga from './questionbank/sagas';

import './index.css';

const sagaMiddleware = createSagaMiddleware();
//
const middleware = [logger, apiMiddleware, sagaMiddleware];

const store = createStore(
  rootReducer,  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);

sagaMiddleware.run(questionPaperSaga);
sagaMiddleware.run(questionBankSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
