import React from 'react';
import { Route } from 'react-router';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Mine from './Mine';
import Repo from './Repo';
import Explore from './Explore';
import MiniPlayer from './MiniPlayer';

const App = () => (
  <div>
    <Sidebar></Sidebar>
    <Navbar></Navbar>

    <Route path="/mine" component={Mine}></Route>
    <Route exact path="/" component={Repo}></Route>
    <Route path="/explore" component={Explore}></Route>

    <MiniPlayer></MiniPlayer>
  </div>
);

export default App;