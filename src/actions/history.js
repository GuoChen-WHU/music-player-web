export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const addToHistory = song => ({
  type: ADD_TO_HISTORY,
  song
});

export const REMOVE_FROM_HISTORY = 'REMOVE_FROM_HISTORY';
export const removeFromHistory = id => ({
  type: REMOVE_FROM_HISTORY,
  id
});

export const CLEAN_HISTORY = 'CLEAN_HISTORY';
export const cleanHistory = () => ({
  type: CLEAN_HISTORY
});
