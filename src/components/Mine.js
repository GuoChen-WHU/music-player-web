import React from 'react';

const Mine = () => (
  <div className="container-fluid">
    <div className="list-group">
      <button type="button" className="list-group-item">本地音乐</button>
      <button type="button" className="list-group-item">最近播放</button>
      <button type="button" className="list-group-item">下载管理</button>
      <button type="button" className="list-group-item">我的电台</button>
      <button type="button" className="list-group-item">我的收藏</button>
    </div>
    <div className="panel">
      <div className="panel-heading">
        <h4>
          <span>图标</span>
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