import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Audio from '../containers/Audio';
import Toplist from '../containers/Toplist';
import MiniPlayer from '../containers/MiniPlayer';
import List from '../containers/List';
import OperationPanel from '../containers/OperationPanel';
import '../styles/App';

const App = () => (
  <div>
    <Route exact path="/" render={() => (
      <Redirect to="/home" />
    )}/>

    <Route path="/home" component={Home} />
    <Route path="/toplist/:id" component={Toplist} />

    <MiniPlayer />
    <List />
    <OperationPanel />
    <Audio />
  </div>
);

export default App;