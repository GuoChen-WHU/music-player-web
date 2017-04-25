import { 
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  CLEAN_LIST
} from '../actions/list';

const list = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      let index = state.findIndex(song => song.id === action.song.id);
      if (index === -1)
        return [...state, action.song];
      return state;
    case REMOVE_FROM_LIST:
      return state.filter(song => song.id !== action.id);
    case CLEAN_LIST:
      return [];
    default: 
      return state;
  }
};

export default list;