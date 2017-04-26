import React from 'react';
import { Route } from 'react-router';
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

const App = () => (
  <div>
    <Sidebar />
    <Navbar />

    <main>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Route path="/mine" component={Mine}></Route>
        <Route exact path="/" component={Repo}></Route>
        <Route path="/explore" component={Explore}></Route>
      </ReactCSSTransitionGroup>
    </main>

    <MiniPlayer />
    <List />
    <OperationPanel />
    <Audio />
  </div>
);

export default App;