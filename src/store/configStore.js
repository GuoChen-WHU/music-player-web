import { createStore } from 'redux';
import rootReducer from '../reducers';

const initState = {
  isSidebarExpanded: false,
  player: {
    id: '7264117',
    song: '信仰',
    singer: '张信哲',
    image: 'http://imgcache.qq.com/music/photo/album_300/1/300_albumpic_1201_0.jpg',
    time: 0,
    total: 253,
    paused: true
  }
};

const store = createStore(rootReducer, initState);

export default store;