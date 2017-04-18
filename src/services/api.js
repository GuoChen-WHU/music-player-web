import { searchUrl } from './config'; 

export const search = keywords => 
  fetch(searchUrl + keywords)
    .then(res => res.json())
    .then(res => res.data.song.list);

const imageUrl = 'http://imgcache.qq.com/music/photo/mid_album_90/{{1}}/{{2}}/{{0}}.jpg';

export const getImageUrl = f => {
  let id = f.split('|')[22];
  let c1 = id.slice(-2, -1);
  let c2 = id.slice(-1);
  return imageUrl.replace('{{1}}', c1).replace('{{2}}', c2).replace('{{0}}', id);
};

const audioUrl = 'http://ws.stream.qqmusic.qq.com/{{id}}.m4a?fromtag=46';

export const getAudioUrl = id => audioUrl.replace('{{id}}', id);