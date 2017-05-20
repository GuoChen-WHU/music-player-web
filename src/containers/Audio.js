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

class Audio extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    singer: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
    paused: PropTypes.bool,
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
    this.playAudio();
    this.timer = setInterval(() => this.props.setTime(this.audioEle.currentTime), 500);
    this.props.togglePaused(false);
  }

  // async to wait src be set properly
  playAudio = () => {
    setTimeout(() => this.audioEle.play(), 0);
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

  componentWillReceiveProps(nextProps) {
    // when switch to another song, add it to history
    this.props.id !== nextProps.id && this.props.addToHistory({
      id: nextProps.id,
      name: nextProps.name,
      singer: nextProps.singer,
      url: nextProps.url,
      image: nextProps.image
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
          this.playAudio();
          break;
        }
        this.props.togglePaused(true);
        break;
      case 'repeat':
        this.playAudio();
        break;
      case 'random':
        let random = Math.floor((this.props.list.length - 1) * Math.random());
        this.props.setSongInfo(this.props.list[random]);
        this.playAudio();
        break;
    }
  }

  handleDurationChange = e => {
    this.props.setTotalTime(this.audioEle.duration);
  }

  render() {
    return (
      <audio 
        src={this.props.url}
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
  url: state.player.url,
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