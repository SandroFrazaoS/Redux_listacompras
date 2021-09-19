import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';


import reducers from './reducers';
import sagas from './sagas';

import { loadState, saveState } from './localStorage';

const localStorageState = loadState();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

/*
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_())
console.log('****', store.getState())
store.dispatch(( { type: 'ADD_PRODUCT', list: 'mes', product: { name: 'cafe'}}))
console.log('****', store.getState());
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, localStorageState, composeEnhancers(
  applyMiddleware(...middlewares)
));

sagaMiddleware.run(sagas)

store.subscribe(() => {
  saveState({ list: store.getState().list })
})


export default store;