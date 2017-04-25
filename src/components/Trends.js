import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { search } from '../services/api';
import '../styles/Trends';

class Trends extends Component {
  static propTypes = {
    trends: PropTypes.array,
    setResultList: PropTypes.func
  }

  handleClick = e => {
    search(e.target.innerText).then(list => this.props.setResultList(list));
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

const mapStateToProps = state => ({
  trends: state.trends
});

export default connect(
  mapStateToProps,
  null
)(Trends);