import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FaChevronLeft from 'react-icons/fa/chevron-left';
import Song from './Song';
import { getToplist } from '../services/api'; 
import mapLocationToBgColor from '../util/mapLocationToBgColor';
import '../styles/Toplist';

class Toplist extends Component {
  static propTypes = {
    match: PropTypes.object,
    location: PropTypes.object
  }
  
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    getToplist(id, 100).then(list => this.setState({list}));
  }

  render() {
    let id = this.props.match.params.id;
    return (
      <div>
        <header className={`toplist-header toplist-header-${id}`} style={{backgroundColor: mapLocationToBgColor[this.props.location.pathname]}}>
          <Link to="/home/explore" className="btn-back"><FaChevronLeft /></Link>
          <h3 className="toplist-title">云音乐</h3>
        </header>
        <ul className="list-group toplist-list">
          {this.state.list.map(info => 
            <Song 
              key={info.id}
              id={info.id}
              name={info.name}
              singer={info.singer}
              url={info.url}
              image={info.image}/>
            )
          }
        </ul>
        <div className="player"></div>
      </div>
    );
  }
}

export default Toplist;