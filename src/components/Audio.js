import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventEmitter from '../util/EventEmitter';
import { 
  setTime, 
  setTotalTime, 
  togglePaused, 
  setSongInfo 
} from '../actions/player';
import { addToHistory } from '../actions/history';
import { getAudioUrl } from '../services/api';

class Audio extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    singer: PropTypes.string,
    image: PropTypes.string,
    paused: PropTypes.bool.isRequired,
    setTime: PropTypes.func,
    setTotalTime: PropTypes.func,
    togglePaused: PropTypes.func,
    setSongInfo: PropTypes.func,
    addToHistory: PropTypes.func
  }

  componentDidMount() {
    EventEmitter.on('audio.play', this.handlePlay);
    EventEmitter.on('audio.pause', this.handlePause);
    EventEmitter.on('audio.setTime', this.handleSetTime);
    this.audioEle.addEventListener('ended', this.handleEnded, false);
    this.audioEle.addEventListener('durationchange', this.handleDurationChange, false);
  }

  componentWillUnmount() {
    EventEmitter.off('audio.play');
    EventEmitter.off('audio.pause');
    EventEmitter.off('audio.setTime');
    clearInterval(this.timer);
    this.audioEle.removeEventListener('ended', this.handleEnded);
    this.audioEle.removeEventListener('durationchange', this.handleDurationChange);
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
    // add to history
    this.props.addToHistory({
      id: this.props.id,
      name: this.props.name,
      singer: this.props.singer,
      image: this.props.image
    });
  }

  // choose a song to play according to play mode
  handleEnded = e => {
    let index = this.props.list.findIndex(song => song.id === this.props.id);
    switch (this.props.mode) {
      default:
      case 'order':
        if (index < this.props.list.length - 1) {
          this.props.setSongInfo(this.props.list[++index]);
          this.play();
          break;
        }
        this.props.togglePaused(true);
        break;
      case 'repeat':
        this.play();
        break;
      case 'random':
        let random = Math.floor((this.props.list.length - 1) * Math.random());
        this.props.setSongInfo(this.props.list[random]);
        this.play();
        break;
    }
  }

  handleDurationChange = e => {
    this.props.setTotalTime(this.audioEle.duration);
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
  name: state.player.name,
  singer: state.player.singer,
  image: state.player.image,
  paused: state.player.paused,
  mode: state.player.mode,
  list: state.list
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