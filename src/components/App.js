import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Toplist from './Toplist';
import Audio from './Audio';
import MiniPlayer from './MiniPlayer';
import List from './List';
import OperationPanel from './OperationPanel';
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