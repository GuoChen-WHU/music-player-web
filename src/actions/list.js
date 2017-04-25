export const ADD_TO_LIST = 'ADD_TO_LIST';
export const addToList = song => ({
  type: ADD_TO_LIST,
  song
});

export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST';
export const removeFromList = id => ({
  type: REMOVE_FROM_LIST,
  id
});

export const CLEAN_LIST = 'CLEAN_LIST';
export const cleanList = () => ({
  type: CLEAN_LIST
});
