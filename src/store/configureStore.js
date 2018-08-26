import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer.js'
import { rootSaga } from "./rootSagas.js";

const sagaMiddleware = createSagaMiddleware();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export default function configureStore(initialState = {}) {
    const store = createStore(rootReducer,initialState, composeEnhancers(applyMiddleware(sagaMiddleware, createLogger())));
    sagaMiddleware.run(rootSaga);
    return store
}