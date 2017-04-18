import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Thumbnail from './Thumbnail';
import { setSongInfo } from '../actions';
import EventEmitter from '../util/EventEmitter';

class Song extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }

  handleClick = e => {
    this.props.setSongInfo({
      id: this.props.id,
      song: this.props.name,
      singer: this.props.singer,
      image: this.props.image
    });
    EventEmitter.trigger('audio.play');
  }

  render() {
    return (
      <li 
        className="list-group-item"
        onClick={this.handleClick}>
        <Thumbnail
          image={this.props.image}
          song={this.props.name}
          singer={this.props.singer}
          size="small"/>
      </li>
    );
  }
}

const mapDispatchToProps = {
  setSongInfo
};

export default connect(
  null, 
  mapDispatchToProps
)(Song);