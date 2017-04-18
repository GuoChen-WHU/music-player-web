import { combineReducers } from 'redux';
import { 
  TOGGLE_SIDEBAR, 
  TOGGLE_PAUSED,
  SET_TIME,
  SET_TOTALTIME,
  SET_SONGINFO,
  SET_RESULTLIST
} from '../actions';

const isSidebarExpanded = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !!action.expand;
    default:
      return state;
  }
};

const player = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_PAUSED:
      return {
        ...state,
        paused: action.paused
      };
    case SET_TIME: 
      return {
        ...state,
        time: action.time
      }
    case SET_TOTALTIME:
      return {
        ...state,
        total: action.time
      }
    case SET_SONGINFO:
      return {
        ...state,
        ...action.info
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  isSidebarExpanded,
  player
});

export default rootReducer;