import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FaPlus from 'react-icons/fa/plus';
import FaHeartO from 'react-icons/fa/heart-o';
import FaBan from 'react-icons/fa/ban';

import EventEmitter from '../util/EventEmitter';

class CollectionItem extends Component {

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    singer: PropTypes.string,
    url: PropTypes.url,
    image: PropTypes.string,
    setSongInfo: PropTypes.func,
    addToList: PropTypes.func,
    removeFromCollection: PropTypes.func
  }

  handleClick = e => {
    // switch to the song clicked
    let song = {
      id: this.props.id,
      name: this.props.name,
      singer: this.props.singer,
      url: this.props.url,
      image: this.props.image
    };
    this.props.setSongInfo(song);
    EventEmitter.trigger('audio.play');
    // add to list
    this.props.addToList(song);
  }

  handleAddToList = e => {
    let song = {
      id: this.props.id,
      name: this.props.name,
      singer: this.props.singer,
      url: this.props.url,
      image: this.props.image
    };
    this.props.addToList(song);
    e.stopPropagation();
  }

  handleRemove = e => {
    this.props.removeFromCollection(this.props.id);
    e.stopPropagation();
  }

  render() {
    return (
      <li className="list-group-item list-item" onClick={this.handleClick}>
        <span>{`${this.props.name} - ${this.props.singer}`}</span>
        <div className="buttons">
          <button className="btn btn-default" onClick={this.handleAddToList}>
            <FaPlus />
          </button>
          <button className="btn btn-default" onClick={this.handleRemove}><FaBan /></button>
        </div>
      </li>
    );
  }
}

export default CollectionItem;
