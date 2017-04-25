import {
  ADD_TO_COLLECTION,
  REMOVE_FROM_COLLECTION,
  CLEAN_COLLECTION
} from '../actions/collection';

const collection = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_COLLECTION:
      let index = state.findIndex(song => song.id === action.song.id);
      if (index > -1) {
        return state;
      }
      return [action.song, ...state];
    case REMOVE_FROM_COLLECTION:
      return state.filter(song => song.id !== action.id);
    case CLEAN_COLLECTION:
      return [];
    default:
      return state;
  }
};

export default collection;