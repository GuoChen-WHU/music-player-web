import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FaEllipsisH from 'react-icons/fa/ellipsis-h';
import Thumbnail from './Thumbnail';
import { setSongInfo, addToList, addToHistory } from '../actions';
import EventEmitter from '../util/EventEmitter';
import '../styles/Song';

class Song extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }

  handleClick = e => {
    let song = {
      id: this.props.id,
      name: this.props.name,
      singer: this.props.singer,
      image: this.props.image
    };
    this.props.setSongInfo(song);
    EventEmitter.trigger('audio.play');
    this.props.addToHistory(song);
    // Add the song to list
    this.props.addToList(song);
  }

  handleTogglePanel = e => {
    let song = {
      id: this.props.id,
      name: this.props.name,
      singer: this.props.singer,
      image: this.props.image
    };
    EventEmitter.trigger('panel.show', song);
    e.stopPropagation();
  }

  render() {
    return (
      <li 
        className="list-group-item"
        onClick={this.handleClick}>
        <Thumbnail
          image={this.props.image}
          name={this.props.name}
          singer={this.props.singer}
          size="small"/>
        <button className="btn btn-default btn-right" onClick={this.handleTogglePanel}>
          <FaEllipsisH />
        </button>
      </li>
    );
  }
}

const mapDispatchToProps = {
  setSongInfo,
  addToList,
  addToHistory
};

export default connect(
  null, 
  mapDispatchToProps
)(Song);