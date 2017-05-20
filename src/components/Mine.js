import React from 'react';
import FaMusic from 'react-icons/fa/music';
import History from '../containers/History';
import Collection from '../containers/Collection';
import '../styles/Mine';

const Mine = () => (
  <div className="container-fluid Mine">
    <div className="list-group">
      <button type="button" className="list-group-item">本地音乐</button>
      <History />
      <Collection />
      <button type="button" className="list-group-item">下载管理</button>
      <button type="button" className="list-group-item">我的电台</button>
    </div>
    <div className="panel">
      <div className="panel-heading">
        <h4>
          <FaMusic />
          <a data-toggle="collapse" href="#song-list">创建的歌单</a>
        </h4>
      </div>
      <div id="song-list" className="panel-collapse collapse in">
        <ul>
          <li>一个歌单</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Mine;