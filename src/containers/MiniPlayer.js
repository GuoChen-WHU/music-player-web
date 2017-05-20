import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FaPlay from 'react-icons/fa/play';
import FaPause from 'react-icons/fa/pause';
import FaListUl from 'react-icons/fa/list-ul';
import Progressbar from '../components/Progressbar';
import EventEmitter from '../util/EventEmitter';
import mapLocationToBgColor from '../util/mapLocationToBgColor';
import '../styles/MiniPlayer';

const MiniPlayer = ({ 
  name, 
  singer, 
  url, 
  image, 
  paused, 
  time,
  total,
  location 
}) => (
  <div className="MiniPlayer container-fluid" style={{backgroundColor: mapLocationToBgColor[location.pathname]}}>
    <div className="row">
      <div className="col-xs-2 avatar-container">
        <img src={image} alt="avatar" className={paused ? 'avatar paused' : 'avatar'}/>
      </div>
      <div className="col-xs-7">
        <h4 className="song-info">{`${singer}-${name}`}</h4>
        <Progressbar time={time} total={total}/>
      </div>
      <div className="col-xs-3 player-controls">
        <button
          className="btn-play" 
          type="button" 
          onClick={() => {
            paused ? EventEmitter.trigger('audio.play') : EventEmitter.trigger('audio.pause');
          }}
          disabled={!url}>
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
  url: state.player.url,
  image: state.player.image,
  paused: state.player.paused,
  time: state.player.time,
  total: state.player.total
});

export default withRouter(connect(
  mapStateToProps, 
  null
)(MiniPlayer));