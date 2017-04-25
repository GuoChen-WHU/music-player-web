import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import lsMiddleware from './lsMiddleware';
import initState from './initState';

const store = createStore(
  rootReducer, 
  initState,
  applyMiddleware(lsMiddleware) 
);

export default store;