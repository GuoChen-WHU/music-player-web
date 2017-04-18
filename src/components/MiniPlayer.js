import React from 'react';
import { connect } from 'react-redux';
import FaPlay from 'react-icons/fa/play';
import FaPause from 'react-icons/fa/pause';
import Progressbar from './Progressbar';
import EventEmitter from '../util/EventEmitter';
import '../styles/MiniPlayer';

const MiniPlayer = ({ song, singer, image, paused }) => (
  <div className="MiniPlayer container-fluid">
    <div className="row">
      <div className="col-xs-2">
        <img src={image} alt="avatar" className="avatar"/>
      </div>
      <div className="col-xs-8">
        <h4 className="song-info">{`${singer}-${song}`}</h4>
        <Progressbar />
      </div>
      <div className="col-xs-2">
        <button
          className="btn btn-default btn-play" 
          type="button" 
          onClick={() => {
            paused ? EventEmitter.trigger('audio.play') : EventEmitter.trigger('audio.pause');
          }}>
          {paused ? <FaPlay /> : <FaPause />}
        </button>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  song: state.player.song,
  singer: state.player.singer,
  image: state.player.image,
  time: state.player.time,
  total: state.player.total,
  paused: state.player.paused
});

export default connect(
  mapStateToProps, 
  null
)(MiniPlayer);