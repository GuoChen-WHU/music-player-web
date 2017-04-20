import React, { Component } from 'react';
import Song from './Song';
import { search, getImageUrl } from '../services/api';
import '../styles/Repo';

class Repo extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: [{
        "docid": "8758666917101856462",
        "f": "101369814|算什么男人|4558|周杰伦|852856|哎呦，不错哦|2496580|289|6|1|0|11580808|4632445|320000|0|31933476|32002118|6708265|6989683|0|001Js78a40BZU6|0025NhlN2yWrP4|001uqejs3d6EID|31|0",
        "fsinger": "周杰伦",
        "fsong": "算什么男人"      
      }]
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