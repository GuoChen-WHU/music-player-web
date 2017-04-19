import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListHeader from './ListHeader';
import ListItem from './ListItem';
import EventEmitter from '../util/EventEmitter';

import '../styles/List';

class List extends Component {

  componentDidMount() {
    EventEmitter.on('list.toggle', this.handleToggle);
  }

  componentWillUnmount() {
    EventEmitter.off('list.toggle');
  }

  handleToggle = e => {
    this.wrapper.classList.toggle('expanded');
  }

  render() {
    return (
      <div ref={wrapper => this.wrapper = wrapper}>
        <div className="list-group List">
          <ListHeader num={this.props.songs.length} />
          {this.props.songs.map(song => 
            <ListItem 
              key={song.id} 
              id={song.id} 
              name={song.name} 
              singer={song.singer}
              image={song.image}
              toggleList={this.handleToggle} />
          )}
        </div>
        <div className="backdrop" onClick={this.handleToggle}></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.list.songs
});

export default connect(
  mapStateToProps,
  null
)(List);