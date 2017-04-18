import React from 'react';
import { Route } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Mine from './Mine';
import Repo from './Repo';
import Explore from './Explore';
import MiniPlayer from './MiniPlayer';
import Audio from './Audio';

const App = () => (
  <div>
    <Sidebar />
    <Navbar />

    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}>
      <Route path="/mine" component={Mine}></Route>
      <Route exact path="/" component={Repo}></Route>
      <Route path="/explore" component={Explore}></Route>
    </ReactCSSTransitionGroup>

    <MiniPlayer />
    <Audio />
  </div>
);

export default App;