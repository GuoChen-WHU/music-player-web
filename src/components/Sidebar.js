import React, { Component } from 'react';
import '../styles/Sidebar';
import EventEmitter from '../util/EventEmitter';

class Sidebar extends Component {

  componentDidMount() {
    EventEmitter.on('sidebar.toggle', this.handleToggle);
  }

  componentWillUnmount() {
    EventEmitter.off('sidebar.toggle');
  }

  handleToggle = e => {
    this.wrapper.classList.toggle('expanded');
  }

  render() {
    return (
      <div ref={wrapper => this.wrapper = wrapper}>
        <div className="backdrop" onClick={this.handleToggle}>
        </div>
        <div className="Sidebar container-fluid">
          <div className="jumbotron">
            <p>登录云音乐</p>
            <p>手机电脑多端同步</p>
            <button>登录</button>
          </div>
          <div className="list-group">
            <button type="button" className="list-group-item">我的消息</button>
            <button type="button" className="list-group-item">会员中心</button>
            <button type="button" className="list-group-item">商城</button>
            <button type="button" className="list-group-item">在线听歌免流量</button>
          </div>
          <div className="list-group">
            <button type="button" className="list-group-item">我的好友</button>
            <button type="button" className="list-group-item">附近的人</button>
          </div>
          <div className="list-group">
            <button type="button" className="list-group-item">个性换肤</button>
            <button type="button" className="list-group-item">定时停止播放</button>
            <button type="button" className="list-group-item">音乐闹钟</button>
            <button type="button" className="list-group-item">驾驶模式</button>
            <button type="button" className="list-group-item">退出</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;