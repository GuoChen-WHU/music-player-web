export const ADD_TO_COLLECTION = 'ADD_TO_COLLECTION';
export const addToCollection = song => ({
  type: ADD_TO_COLLECTION,
  song
});

export const REMOVE_FROM_COLLECTION = 'REMOVE_FROM_COLLECTION';
export const removeFromCollection = id => ({
  type: REMOVE_FROM_COLLECTION,
  id
});

export const CLEAN_COLLECTION = 'CLEAN_COLLECTION';
export const cleanCollection = () => ({
  type: CLEAN_COLLECTION
});
