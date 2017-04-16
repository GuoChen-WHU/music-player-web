import React from 'react';
import { connect } from 'react-redux';
import { setTime, togglePaused } from '../actions';
import '../styles/MiniPlayer';

const MiniPlayer = ({ time, paused, setTime, togglePaused }) => (
  <div className="MiniPlayer container-fluid">
    <div className="row">
      <div className="col-sm-4">
        <div className="media">
          <div className="media-left">
            <img src="http://imgcache.qq.com/music/photo/album_300/1/300_albumpic_1201_0.jpg" alt="avatar" className="media-object avatar" />
          </div>
          <div className="media-body">
            <h4 className="media-header">信仰</h4>
            <h5 className="media-header">张信哲</h5>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <span className="time">{time}</span>
        <div className="progress">
          <div 
            className="progress-bar progress-bar-success progress-bar-striped"
            style={{width: '40%'}}>
          </div>
        </div>
      </div>
      <div className="col-sm-2">
        <button
          className="btn btn-default" 
          type="button" 
          onClick={() => {
            paused ? this.audio.play() : this.audio.pause();
            togglePaused(!paused);
          }}>
          {paused ? '+' : '-'}
        </button>
      </div>
    </div>

    <audio 
      src="http://ws.stream.qqmusic.qq.com/7264117.m4a?fromtag=46"
      ref={audio => { this.audio = audio; }}>
    </audio>
  </div>
);

const mapStateToProps = (state) => ({
  time: state.player.time,
  paused: state.player.paused
});

const mapDispatchToProps = {
  setTime,
  togglePaused
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MiniPlayer);