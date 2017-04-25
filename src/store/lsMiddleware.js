// Set localStorage for history or collection change

import { 
  ADD_TO_HISTORY, 
  REMOVE_FROM_HISTORY, 
  CLEAN_HISTORY 
} from '../actions/history';
import {
  ADD_TO_COLLECTION,
  REMOVE_FROM_COLLECTION,
  CLEAN_COLLECTION
} from '../actions/collection';

// Actions need modify localstorage
const lsActions = [
  ADD_TO_HISTORY, 
  REMOVE_FROM_HISTORY, 
  CLEAN_HISTORY,
  ADD_TO_COLLECTION,
  REMOVE_FROM_COLLECTION,
  CLEAN_COLLECTION
];

const historyReg = /HISTORY$/;
const collectionReg = /COLLECTION$/;

const lsMiddleware = ({ dispatch, getState }) => next => action => {
  let result = next(action);
  if (lsActions.includes(action.type)) {
    let newState = getState();
    if (historyReg.test(action.type)) {
      localStorage.setItem('history', JSON.stringify(newState.history));
    } else if (collectionReg.test(action.type)) {
      localStorage.setItem('collection', JSON.stringify(newState.collection));
    }
  }
};

export default lsMiddleware;
