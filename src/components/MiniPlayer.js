import React from 'react';
import { connect } from 'react-redux';
import FaPlay from 'react-icons/fa/play';
import FaPause from 'react-icons/fa/pause';
import FaListUl from 'react-icons/fa/list-ul';
import Progressbar from './Progressbar';
import EventEmitter from '../util/EventEmitter';
import '../styles/MiniPlayer';

const MiniPlayer = ({ name, singer, image, paused }) => (
  <div className="MiniPlayer container-fluid">
    <div className="row">
      <div className="col-xs-2 avatar-container">
        <img src={image} alt="avatar" className={paused ? 'avatar paused' : 'avatar'}/>
      </div>
      <div className="col-xs-7">
        <h4 className="song-info">{`${singer}-${name}`}</h4>
        <Progressbar />
      </div>
      <div className="col-xs-3 player-controls">
        <button
          className="btn-play" 
          type="button" 
          onClick={() => {
            paused ? EventEmitter.trigger('audio.play') : EventEmitter.trigger('audio.pause');
          }}>
          {paused ? <FaPlay /> : <FaPause />}
        </button>
        <button
          className="btn-play" 
          type="button"
          onClick={() => EventEmitter.trigger('list.toggle')}> 
          <FaListUl />
        </button>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  name: state.player.name,
  singer: state.player.singer,
  image: state.player.image,
  paused: state.player.paused
});

export default connect(
  mapStateToProps, 
  null
)(MiniPlayer);