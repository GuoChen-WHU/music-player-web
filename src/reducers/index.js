import { combineReducers } from 'redux';
import player from './player';
import trends from './trends';
import list from './list';
import history from './history';
import collection from './collection';

const rootReducer = combineReducers({
  player,
  trends,
  list,
  history,
  collection
});

export default rootReducer;