import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListHeader from '../components/ListHeader';
import ListItem from '../components/ListItem';
import EventEmitter from '../util/EventEmitter';

import { setMode } from '../actions/player';
import { cleanList } from '../actions/list';
import { setSongInfo } from '../actions/player';
import { removeFromList } from '../actions/list';
import { addToHistory } from '../actions/history';
import { addToCollection } from '../actions/collection';

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
          <ListHeader 
            mode={this.props.mode} 
            num={this.props.list.length}
            setMode={this.props.setMode}
            cleanList={this.props.cleanList} 
          />
          {this.props.list.map(song => 
            <ListItem 
              key={song.id} 
              id={song.id} 
              name={song.name} 
              singer={song.singer}
              url={song.url}
              image={song.image}
              toggleList={this.handleToggle}
              setSongInfo={this.props.setSongInfo}
              removeFromList={this.props.removeFromList}
              addToHistory={this.props.addToHistory}
              addToCollection={this.props.addToCollection}
            />
          )}
        </div>
        <div className="backdrop" onClick={this.handleToggle}></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list,
  mode: state.player.mode
});

const mapDispatchToProps = {
  setMode,
  cleanList,
  setSongInfo,
  removeFromList,
  addToHistory,
  addToCollection
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);