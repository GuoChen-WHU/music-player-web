import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryItem from './HistoryItem';

class History extends Component {
  render() {
    return (
      <div>
        <button 
          type="button" 
          className="list-group-item" 
          data-toggle="collapse"
          data-target="#historyCollapse">
          最近播放
          <span className="badge">{this.props.history.length}</span>
        </button>
        <div className="collapse" id="historyCollapse">
          <div className="list-group">
            {this.props.history.map(song => 
              <HistoryItem
                key={song.id} 
                id={song.id} 
                name={song.name} 
                singer={song.singer}
                url={song.url}
                image={song.image}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history
});

export default connect(
  mapStateToProps, 
  null
)(History);