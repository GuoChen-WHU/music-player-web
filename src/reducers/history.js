import { 
  ADD_TO_HISTORY,
  REMOVE_FROM_HISTORY,
  CLEAN_HISTORY
} from '../actions/history';

const history = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      let index = state.findIndex(song => song.id === action.song.id);
      if (index === 0) return state;
      if (index > -1) {
        let newHistory = [...state];
        newHistory.splice(index, 1);
        newHistory.unshift(state[index]);
        return newHistory;
      }
      // only cache 10 songs played recently
      return [action.song, ...state].slice(0, 10);
    case REMOVE_FROM_HISTORY:
      return state.filter(song => song.id !== action.id);
    case CLEAN_HISTORY:
      return [];
    default:
      return state;
  }
};

export default history;