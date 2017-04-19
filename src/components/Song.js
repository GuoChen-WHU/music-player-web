import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Thumbnail from './Thumbnail';
import { setSongInfo, addToList } from '../actions';
import EventEmitter from '../util/EventEmitter';

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
    // Add the song to list
    this.props.addToList(song);
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
      </li>
    );
  }
}

const mapDispatchToProps = {
  setSongInfo,
  addToList
};

export default connect(
  null, 
  mapDispatchToProps
)(Song);