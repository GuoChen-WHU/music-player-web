import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Mine from './Mine';
import Repo from './Repo';
import Explore from './Explore';
import '../styles/Home';

const Home = ({ match, location }) => (
  <div>
    <Sidebar />
    <Navbar />

    <Route exact path={match.url} render={() => (
      <Redirect to={`${match.url}/search`} />
    )}/>

    <main>
      <CSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Switch key={location.key}>
          <Route path={`${match.url}/mine`} component={Mine} />
          <Route path={`${match.url}/explore`} component={Explore} />
          <Route path={`${match.url}/search`} component={Repo} />
        </Switch>
      </CSSTransitionGroup>
    </main>
  </div>
);

export default Home;