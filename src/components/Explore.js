import React, { Component } from 'react';
import Spinner from './Spinner';
import Toplist from './Toplist';
import { getToplist } from '../services/api'; 
import '../styles/Explore';

class Explore extends Component {
  constructor() {
    super();
    this.state = {
      toplists: []
    };
  }

  componentDidMount() {
    let fetches = [];
    // Get 6 toplists
    for (let i = 0; i < 6; i++) {
      fetches.push(getToplist(i, 3));
    }
    Promise.all(fetches).then(lists => this.setState({
      toplists: lists
    }));
  }

  render() {
    return this.state.toplists.length ? 
      (
        <div className="container-fluid Explore">
          <h3 className="title">排行榜</h3>
          {this.state.toplists.map((list, index) => 
            <Toplist
              key={index}
              id={index}
              top3={list}
            />
          )}
        </div>
      ) :
      <Spinner />;
  }
}

export default Explore;