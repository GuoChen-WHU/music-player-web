import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FaLevelDown from 'react-icons/fa/level-down';
import FaRepeat from 'react-icons/fa/repeat';
import FaRandom from 'react-icons/fa/random';
import FaPlus from 'react-icons/fa/plus';
import FaTrash from 'react-icons/fa/trash';

import { setMode } from '../actions/player';
import { cleanList } from '../actions/list';

import '../styles/ListHeader';

const mapToNextMode = {
  order: 'repeat',
  repeat: 'random',
  random: 'order'
};

class ListHeader extends Component {

  static propTypes = {
    mode: PropTypes.string,
    setMode: PropTypes.func,
    num: PropTypes.number
  }

  handleModeChange = e => {
    this.props.setMode(mapToNextMode[this.props.mode]);
  }

  handleCleanList = e => {
    this.props.cleanList();
  }

  render() {
    let icon, text;
    switch (this.props.mode) {
      default:
      case 'order':
        icon = <FaLevelDown />;
        text = '顺序播放';
        break;
      case 'repeat':
        icon = <FaRepeat />;
        text = '单曲循环';
        break;
      case 'random':
        icon = <FaRandom />;
        text = '随机播放'; 
        break;
    }

    return (
      <div className="list-header">
        <div className="list-header-left">
          <button className="btn btn-default" onClick={this.handleModeChange}>
            {icon}{text}
            <span className="badge">{this.props.num}</span>
          </button>
        </div>
        <div className="list-header-right">
          <button className="btn btn-default">
            <FaPlus />
          </button>
          <button className="btn btn-default" onClick={this.handleCleanList}>
            <FaTrash />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mode: state.player.mode
});

const mapDispatchToProps = {
  setMode,
  cleanList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListHeader);