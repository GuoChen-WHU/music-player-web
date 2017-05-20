import React, { Component } from 'react';
import PropTypes from 'prop-types';
import convertTime from '../util/convertTime';
import EventEmitter from '../util/EventEmitter';
import '../styles/Progressbar';

class Progressbar extends Component {

  static propTypes = {
    time: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }

  handleClick = e => {
    let coordStart = this.progressbar.getBoundingClientRect().left;
    let coordEnd = e.pageX;
    let currentTime = (coordEnd - coordStart) / this.progressbar.offsetWidth * this.props.total;
    EventEmitter.trigger('audio.setTime', currentTime);
  }

  render() {
    return (
      <div>
        <span>{convertTime(this.props.time)}</span>
        <span className="total">{convertTime(this.props.total)}</span>
        <div className="progress progress-slim" ref={bar => this.progressbar = bar} onClick={this.handleClick}>
          <div 
            className="progress-bar progress-bar-success"
            style={{width: `${this.props.time / this.props.total * 100}%`}}>
          </div>
        </div>
      </div>
    );
  }
}

export default Progressbar;