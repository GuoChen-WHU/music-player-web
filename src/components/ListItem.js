import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FaHeartO from 'react-icons/fa/heart-o';
import FaBan from 'react-icons/fa/ban';
import { setSongInfo, removeFromList } from '../actions';
import EventEmitter from '../util/EventEmitter';
import '../styles/ListItem';

class ListItem extends Component {
  static propTypes = {
    // from parent component - List
    id: PropTypes.string,
    name: PropTypes.string,
    singer: PropTypes.string,
    image: PropTypes.string,
    toggleList: PropTypes.func,
    // from store
    setSongInfo: PropTypes.func,
    removeFromList: PropTypes.func
  }

  handleClick = e => {
    // switch to the song clicked
    this.props.setSongInfo({
      id: this.props.id,
      name: this.props.name,
      singer: this.props.singer,
      image: this.props.image
    });
    EventEmitter.trigger('audio.play');
    // hide list
    this.props.toggleList();
  }

  handleRemove = e => {
    this.props.removeFromList(this.props.id);
    e.stopPropagation();
  }

  render() {
    return (
      <li className="list-group-item list-item" onClick={this.handleClick}>
        <span>{`${this.props.name} - ${this.props.singer}`}</span>
        <div className="buttons">
          <button className="btn btn-default"><FaHeartO /></button>
          <button className="btn btn-default" onClick={this.handleRemove}><FaBan /></button>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = {
  setSongInfo,
  removeFromList
};

export default connect(
  null,
  mapDispatchToProps
)(ListItem);