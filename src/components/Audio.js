import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventEmitter from '../util/EventEmitter';
import { setTime, setTotalTime, togglePaused } from '../actions';
import { getAudioUrl } from '../services/api';

class Audio extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    paused: PropTypes.bool.isRequired,
    setTime: PropTypes.func,
    setTotalTime: PropTypes.func,
    togglePaused: PropTypes.func
  }

  componentDidMount() {
    EventEmitter.on('audio.play', () => {
      this.audioEle.play();
      this.timer = setInterval(() => this.props.setTime(this.audioEle.currentTime), 500);
      this.props.togglePaused(false);
    });
    EventEmitter.on('audio.pause', () => {
      this.audioEle.pause();
      clearInterval(this.timer);
      this.props.togglePaused(true);
    });
    EventEmitter.on('audio.setTime', time => {
      this.audioEle.currentTime = time;
      this.props.setTime(time);
    });
    this.audioEle.addEventListener('play', e => this.props.setTotalTime(this.audioEle.duration), false);
    this.audioEle.addEventListener('ended', e => this.props.togglePaused(true), false);
  }

  componentWillUnmount() {
    EventEmitter.off('audio.play');
    EventEmitter.off('audio.pause');
    clearInterval(this.timer);
  }

  render() {
    return (
      <audio 
        src={getAudioUrl(this.props.id)}
        ref={audio => { this.audioEle = audio; }}
        autoPlay={!this.props.paused}>
      </audio>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.player.id,
  paused: state.player.paused
});

const mapDispatchToProps = {
  setTime,
  setTotalTime,
  togglePaused
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Audio);