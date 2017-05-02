import { logo } from '../assets';

const history = JSON.parse(localStorage.getItem('history')) || [];
const lastSong = history[0];

let player = lastSong ? 
  {
    id: lastSong.id,
    name: lastSong.name,
    singer: lastSong.singer,
    url: lastSong.url,
    image: lastSong.image
  } :
  {
    id: 'welcome',
    name: '云音乐',
    singer: '欢迎使用',
    url: '',
    image: logo
  };
Object.assign(player, {
  time: 0,
  total: 0,
  paused: true,
  mode: 'order'
});

let list = lastSong ? [lastSong] : [];
const initState = {
  player: player,
  trends: ['漂洋过海来看你', '薛之谦', '爱河', '我要你', '成都', '着迷', '速度与激情8', '林俊杰'],
  list: list,
  history: history,
  collection: JSON.parse(localStorage.getItem('collection')) || []
};

export default initState;