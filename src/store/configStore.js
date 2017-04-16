import { createStore } from 'redux';
import rootReducer from '../reducers';

const initState = {
  isSidebarExpanded: false,
  player: {
    time: '00:00',
    paused: true
  }
};

const store = createStore(rootReducer, initState);

export default store;