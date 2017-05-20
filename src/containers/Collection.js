import React, { Component } from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../components/CollectionItem';

import { setSongInfo } from '../actions/player';
import { addToList } from '../actions/list';
import { removeFromCollection } from '../actions/collection';

const Collection = ({ collection, setSongInfo, addToList, removeFromCollection }) => (
  <div>
    <button 
      type="button" 
      className="list-group-item" 
      data-toggle="collapse"
      data-target="#collectionCollapse">
      我的收藏
      <span className="badge">{collection.length}</span>
    </button>
    <div className="collapse" id="collectionCollapse">
      <div className="list-group">
        {collection.map(song => 
          <CollectionItem
            key={song.id} 
            id={song.id} 
            name={song.name} 
            singer={song.singer}
            url={song.url}
            image={song.image}
            setSongInfo={setSongInfo}
            addToList={addToList}
            removeFromCollection={removeFromCollection}
          />
        )}
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  collection: state.collection
});

const mapDispatchToProps = {
  setSongInfo,
  addToList,
  removeFromCollection
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);