import React, { Component } from 'react';
import { connect } from 'react-redux';
import CollectionItem from './CollectionItem';

class Collection extends Component {
  render() {
    return (
      <div>
        <button 
          type="button" 
          className="list-group-item" 
          data-toggle="collapse"
          data-target="#collectionCollapse">
          我的收藏
          <span className="badge">{this.props.collection.length}</span>
        </button>
        <div className="collapse" id="collectionCollapse">
          <div className="list-group">
            {this.props.collection.map(song => 
              <CollectionItem
                key={song.id} 
                id={song.id} 
                name={song.name} 
                singer={song.singer}
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
  collection: state.collection
});

export default connect(
  mapStateToProps, 
  null
)(Collection);