import React from 'react';
import { Link } from 'react-router-dom';
import FaBars from 'react-icons/fa/bars';
import EventEmitter from '../util/EventEmitter';

const Navbar = () => (
  <nav className="navbar">
    <div className="container-fluid">
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-left">
          <li><a href="#" onClick={() => EventEmitter.trigger('sidebar.toggle')}><FaBars/></a></li>
        </ul>        
        <ul className="nav navbar-nav">
          <li>
            <Link to="/Mine">我的</Link>
          </li>
          <li>
            <Link to="/">音乐馆</Link>
          </li>
          <li>
            <Link to="/Explore">发现</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;