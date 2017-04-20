import { combineReducers } from 'redux';
import { 
  TOGGLE_PAUSED,
  SET_TIME,
  SET_TOTALTIME,
  SET_SONGINFO,
  SET_RESULTLIST,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  CLEAN_LIST,
  SET_MODE,
  ADD_TO_HISTORY
} from '../actions';

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

const list = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      if (!state.songs.filter(song => song.id === action.song.id).length)
        return {
          ...state,
          songs: [...state.songs, action.song]
        };
      return state;
    case SET_MODE:
      return {
        ...state,
        mode: action.mode
      };
    case REMOVE_FROM_LIST:
      return {
        ...state,
        songs: state.songs.filter(song => song.id !== action.id)
      };
    case CLEAN_LIST:
      return {
        ...state,
        songs: []
      };
    default: 
      return state;
  }
};

const history = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return [...state, action.song];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  player,
  list,
  history
});

export default rootReducer;