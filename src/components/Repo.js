import React, { Component } from 'react';
import Song from './Song';
import Trends from './Trends';
import { search } from '../services/api';
import '../styles/Repo';

class Repo extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: []
    };
  }

  handleInputChange = e => {
    this.setState({input: e.target.value});
  }

  handleSearch = e => {
    search(this.state.input).then(list => this.setState({list: list}));
  }

  setResultList = list => {
    this.setState({list: list});
  }

  render() {
    return (
      <div className="container-fluid Repo">
        <div className="input-group search-control">
          <input 
            type="text" 
            className="form-control" 
            value={this.state.input}
            onChange={this.handleInputChange} 
            placeholder="搜索歌曲" />
          <button 
            type="button" 
            className="clear-button"
            style={this.state.input ? {} : {display: 'none'}} 
            onClick={() => this.setState({input: ''})}>
            &times;
          </button>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.handleSearch}>搜索</button>
          </span>
        </div>

        <Trends setResultList={this.setResultList}/>

        <ul className="list-group results">
          {this.state.list.map(info => 
            <Song 
              key={info.id}
              id={info.id}
              name={info.name}
              singer={info.singer}
              url={info.url}
              image={info.image}/>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Repo;