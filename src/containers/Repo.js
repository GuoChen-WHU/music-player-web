import React, { Component } from 'react';
import { connect } from 'react-redux';
import Song from '../components/Song';
import Trends from '../components/Trends';
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

  searchByKeyword = keyword => {
    search(keyword).then(list => this.setState({list: list}));
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
            <button 
              className="btn btn-default" 
              type="button" 
              onClick={() => this.searchByKeyword(this.state.input)}>
              搜索
            </button>
          </span>
        </div>

        <Trends trends={this.props.trends} searchByKeyword={this.searchByKeyword}/>

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

const mapStateToProps = state => ({
  trends: state.trends
});

export default connect(
  mapStateToProps,
  null
)(Repo);
