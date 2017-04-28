import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Mine from './Mine';
import Repo from './Repo';
import Explore from './Explore';
import MiniPlayer from './MiniPlayer';
import List from './List';
import Audio from './Audio';
import OperationPanel from './OperationPanel';

const App = ({ location }) => (
  <div>
    <Sidebar />
    <Navbar />

    <Route exact path="/" render={() => (
      <Redirect to="/search" />
    )}/>

    <main>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Route location={location} path="/mine" render={() => <Mine />}></Route>
        <Route location={location} path="/search" render={() => <Repo />}></Route>
        <Route location={location} path="/explore" render={() => <Explore />}></Route>
      </ReactCSSTransitionGroup>
    </main>

    <MiniPlayer />
    <List />
    <OperationPanel />
    <Audio />
  </div>
);

export default App;