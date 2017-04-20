import React, { Component } from 'react';
import { connect } from 'react-redux';

import FaPlus from 'react-icons/fa/plus';
import FaHeartO from 'react-icons/fa/heart-o';
import FaFileAudioO from 'react-icons/fa/file-audio-o';
import FaCommentingO from 'react-icons/fa/commenting-o';

import { addToList } from '../actions';
import EventEmitter from '../util/EventEmitter';
import '../styles/OperationPanel';

class OperationPanel extends Component {

  componentDidMount() {
    EventEmitter.on('panel.show', song => {
      this.song = song;
      this.handleToggle();
    });
  }

  componentWillUnmount() {
    EventEmitter.off('panel.show');
  }

  handleToggle = e => {
    this.wrapper.classList.toggle('expanded');
  }

  handleAddToList = e => {
    this.props.addToList(this.song);
    this.handleToggle();
  }

  render() {
    return (
      <div ref={wrapper => this.wrapper = wrapper}>
        <div className="OperationPanel container-fluid">
          <div className="row">
            <div className="col-xs-3 btn-wrapper">
              <button className="btn btn-default" onClick={this.handleAddToList}>
                <FaPlus />
              </button>
              <h5>添加到列表</h5>
            </div>
            <div className="col-xs-3 btn-wrapper">
              <button className="btn btn-default">
                <FaHeartO />
              </button>
              <h5>收藏</h5>
            </div>
            <div className="col-xs-3 btn-wrapper">
              <button className="btn btn-default">
                <FaFileAudioO />
              </button>
              <h5>添加到歌单</h5>
            </div>
            <div className="col-xs-3 btn-wrapper">
              <button className="btn btn-default">
                <FaCommentingO />
              </button>
              <h5>评论</h5>
            </div>
          </div>
        </div>
        <div className="backdrop" onClick={this.handleToggle}></div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addToList
};

export default connect(
  null,
  mapDispatchToProps
)(OperationPanel);