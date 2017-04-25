const initState = {
  player: {
    id: '7264117',
    name: '信仰',
    singer: '张信哲',
    image: 'http://imgcache.qq.com/music/photo/album_300/1/300_albumpic_1201_0.jpg',
    time: 0,
    total: 253,
    paused: true,
    mode: 'order'
  },
  trends: ['漂洋过海来看你', '薛之谦', '爱河', '我要你', '成都', '着迷', '速度与激情8', '林俊杰'],
  list: [
    {id: '7264117', name: '信仰', singer: '张信哲', image: 'http://imgcache.qq.com/music/photo/album_300/1/300_albumpic_1201_0.jpg'}
  ],
  history: JSON.parse(localStorage.getItem('history')) || [],
  collection: JSON.parse(localStorage.getItem('collection')) || []
};

export default initState;