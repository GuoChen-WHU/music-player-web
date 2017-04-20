import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventEmitter from '../util/EventEmitter';
import { 
  setTime, 
  setTotalTime, 
  togglePaused, 
  setSongInfo,
  addToHistory 
} from '../actions';
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
    EventEmitter.on('audio.play', this.handlePlay );
    EventEmitter.on('audio.pause', this.handlePause);
    EventEmitter.on('audio.setTime', this.handleSetTime);
    this.audioEle.addEventListener('ended', this.handleEnded, false);
  }

  componentWillUnmount() {
    EventEmitter.off('audio.play');
    EventEmitter.off('audio.pause');
    EventEmitter.off('audio.setTime');
    clearInterval(this.timer);
    this.audioEle.removeEventListener('ended', this.handleEnded);
  }

  handlePlay = () => {
    this.play();
    this.timer = setInterval(() => this.props.setTime(this.audioEle.currentTime), 500);
    this.props.togglePaused(false);
  }

  handlePause = () => {
    this.audioEle.pause();
    clearInterval(this.timer);
    this.props.togglePaused(true);
  }

  handleSetTime = time => {
    this.audioEle.currentTime = time;
    this.props.setTime(time);
  }

  play = () => {
    this.audioEle.play();
    // wait until duration is calculated properly
    this.waitDuration();
  }

  waitDuration = () => {
    if (isNaN(this.audioEle.duration)) {
      setTimeout(this.waitDuration, 100);
      return;
    }
    this.props.setTotalTime(this.audioEle.duration);
  }

  // choose a song to play according to play mode
  handleEnded = e => {
    let index = this.props.songs.findIndex(song => song.id === this.props.id);
    switch (this.props.mode) {
      default:
      case 'order':
        if (index < this.props.songs.length - 1) {
          this.props.setSongInfo(this.props.songs[++index]);
          this.props.addToHistory(this.props.songs[index]);
          this.play();
          break;
        }
        this.props.togglePaused(true);
        break;
      case 'repeat':
        this.play();
        break;
      case 'random':
        let random = Math.floor((this.props.songs.length - 1) * Math.random());
        this.props.setSongInfo(this.props.songs[random]);
        this.props.addToHistory(this.props.songs[random]);
        this.play();
        break;
    }
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
  paused: state.player.paused,
  mode: state.list.mode,
  songs: state.list.songs
});

const mapDispatchToProps = {
  setTime,
  setTotalTime,
  togglePaused,
  setSongInfo,
  addToHistory
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Audio);