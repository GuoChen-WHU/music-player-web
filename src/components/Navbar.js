import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import FaBars from 'react-icons/fa/bars';
import FaSearch from 'react-icons/fa/search';
import EventEmitter from '../util/EventEmitter';
import '../styles/Navbar';

class Navbar extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    const { match, location } = this.props;
    const currentTab = location.pathname.match(/\/(\w+)$/)[1];

    return (
      <nav className="container-fluid">
        <span className="nav-button" onClick={() => EventEmitter.trigger('sidebar.toggle')}><FaBars/></span>
        <ul className="nav">
          <li className={currentTab === 'mine' ? 'nav-item current' : 'nav-item'}>
            <Link to={`${match.url}/mine`}>我的</Link>
          </li>
          <li className={currentTab === 'search' ? 'nav-item current' : 'nav-item'}>
            <Link to={`${match.url}/search`}>乐库</Link>
          </li>
          <li className={currentTab === 'explore' ? 'nav-item current' : 'nav-item'}>
            <Link to={`${match.url}/explore`}>发现</Link>
          </li>
          <li className="move"></li>
        </ul>
        <span className="nav-button nav-button-right"><Link to={`${match.url}/search`}><FaSearch /></Link></span>
      </nav>
    );
  }
} 

const NavbarWithRouter = withRouter(Navbar);
export default NavbarWithRouter;