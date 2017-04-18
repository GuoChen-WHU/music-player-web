import React, { Component } from 'react';
import Song from './Song';
import { search, getImageUrl } from '../services/api';
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

  render() {
    return (
      <div className="container-fluid">
        <div className="input-group search-control">
          <input 
            type="text" 
            className="form-control" 
            value={this.state.input}
            onChange={this.handleInputChange} 
            placeholder="..." />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.handleSearch}>搜索</button>
          </span>
        </div>

        <ul className="list-group results">
          {this.state.list.map(info => 
            <Song 
              key={info.docid}
              id={info.f.split('|')[0]}
              name={info.fsong}
              singer={info.fsinger}
              image={getImageUrl(info.f)}/>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Repo;