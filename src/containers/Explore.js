import React, { Component } from 'react';
import Spinner from '../components/Spinner';
import ToplistInfo from '../components/ToplistInfo';
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
    let isFetching = !this.state.toplists.length;
    return isFetching ?
      <Spinner /> : 
      (
        <div className="container-fluid Explore">
          <h3 className="title">排行榜</h3>
          {this.state.toplists.map((list, index) => 
            <ToplistInfo
              key={index}
              id={index}
              top3={list}
            />
          )}
        </div>
      );
  }
}

export default Explore;