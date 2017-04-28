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
    const { location } = this.props;

    return (
      <nav className="container-fluid">
        <span className="nav-button"><a href="#" onClick={() => EventEmitter.trigger('sidebar.toggle')}><FaBars/></a></span>
        <ul className="nav">
          <li className={location.pathname === '/mine' ? 'nav-item current' : 'nav-item'}>
            <Link to="/mine">我的</Link>
          </li>
          <li className={location.pathname === '/search' ? 'nav-item current' : 'nav-item'}>
            <Link to="/search">乐库</Link>
          </li>
          <li className={location.pathname === '/explore' ? 'nav-item current' : 'nav-item'}>
            <Link to="/explore">发现</Link>
          </li>
          <li className="move"></li>
        </ul>
        <span className="nav-button nav-button-right"><Link to="/search"><FaSearch /></Link></span>
      </nav>
    );
  }
} 

const NavbarWithRouter = withRouter(Navbar);
export default NavbarWithRouter;