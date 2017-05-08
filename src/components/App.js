import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Mine from './Mine';
import Repo from './Repo';
import Explore from './Explore';
import MiniPlayer from './MiniPlayer';
import List from './List';
import Audio from './Audio';
import OperationPanel from './OperationPanel';
import '../styles/App';

const App = ({ location }) => (
  <div>
    <Sidebar />
    <Navbar />

    <Route exact path="/" render={() => (
      <Redirect to="/search" />
    )}/>

    <main>
      <CSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Switch key={location.key}>
          <Route path="/mine" component={Mine} />
          <Route path="/explore" component={Explore} />
          <Route path="/search" component={Repo} />
        </Switch>
      </CSSTransitionGroup>
    </main>

    <MiniPlayer />
    <List />
    <OperationPanel />
    <Audio />
  </div>
);

export default App;