import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toplistImgs } from '../assets';
import '../styles/ToplistInfo';

class ToplistInfo extends Component {

  static propTypes = {
    id: PropTypes.number,
    top3: PropTypes.array
  }

  render() {
    return (
      <Link to={`/toplist/${this.props.id}`}>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="media">
              <div className="media-left">
                <img src={toplistImgs[this.props.id]} alt="avatar" />
              </div>
              <div className="media-body">
                {this.props.top3.map((song, index) => 
                  <h4 key={song.name} className="media-header top-song-info">
                    {`${index + 1}. ${song.name} - ${song.singer}`}
                  </h4>
                )}
              </div>
            </div>
          </li>
        </ul>
      </Link>
    );
  }
}

export default ToplistInfo;