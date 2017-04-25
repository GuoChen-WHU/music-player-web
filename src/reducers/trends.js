import { SET_TRENDS } from '../actions/trends';

const trends = (state = [], action) => {
  switch (action.type) {
    case SET_TRENDS:
      return action.trends;
    default:
      return state;
  }
};

export default trends;