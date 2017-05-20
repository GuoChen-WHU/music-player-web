import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Trends';

class Trends extends Component {
  static propTypes = {
    trends: PropTypes.array.isRequired,
    searchByKeyword: PropTypes.func.isRequired
  }

  handleClick = e => {
    this.props.searchByKeyword(e.target.innerText);
  }

  render() {
    return (
      <div className="Trends">
        {this.props.trends.map(trend => (
          <span 
            key={trend}
            className="trend-label"
            onClick={this.handleClick}>
            {trend}
          </span>
        ))}
      </div>
    );
  }
}

export default Trends;