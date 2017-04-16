import { combineReducers } from 'redux';
import { 
  TOGGLE_SIDEBAR, 
  TOGGLE_PAUSED,
  SET_TIME 
} from '../actions';

const isSidebarExpanded = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !!action.expand;
    default:
      return state;
  }
}

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
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  isSidebarExpanded,
  player
});

export default rootReducer;