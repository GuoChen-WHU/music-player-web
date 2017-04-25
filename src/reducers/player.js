import { 
  TOGGLE_PAUSED,
  SET_TIME,
  SET_TOTALTIME,
  SET_SONGINFO,
  SET_MODE
} from '../actions/player';

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
    case SET_MODE:
      return {
        ...state,
        mode: action.mode
      }
    default:
      return state;
  }
};

export default player;