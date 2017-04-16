import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleSidebar } from '../actions';

const Navbar = ({ isExpanded, toggleSidebar }) => (
  <nav className="navbar">
    <div className="container-fluid">
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-left">
          <li><a href="#" onClick={() => toggleSidebar(!isExpanded)}>左栏</a></li>
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
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">搜索</a></li>
        </ul>        
      </div>
    </div>
  </nav>
);

const mapStateToProps = (state) => ({
  isExpanded: state.isSidebarExpanded
});

const mapDispatchToProps = {
  toggleSidebar
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Navbar);