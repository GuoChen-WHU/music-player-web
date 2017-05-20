import React from 'react';
import { connect } from 'react-redux';
import HistoryItem from '../components/HistoryItem';

import { setSongInfo } from '../actions/player';
import { addToList } from '../actions/list';
import { removeFromHistory } from '../actions/history';
import { addToCollection } from '../actions/collection';

const History = ({ history, setSongInfo, addToList, removeFromHistory, addToCollection }) => (
  <div>
    <button 
      type="button" 
      className="list-group-item" 
      data-toggle="collapse"
      data-target="#historyCollapse">
      最近播放
      <span className="badge">{history.length}</span>
    </button>
    <div className="collapse" id="historyCollapse">
      <div className="list-group">
        {history.map(song => 
          <HistoryItem
            key={song.id} 
            id={song.id} 
            name={song.name} 
            singer={song.singer}
            url={song.url}
            image={song.image}
            setSongInfo={setSongInfo}
            addToList={addToList}
            removeFromHistory={removeFromHistory}
            addToCollection={addToCollection}
          />
        )}
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  history: state.history
});

const mapDispatchToProps = {
  setSongInfo,
  addToList,
  addToCollection,
  removeFromHistory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);