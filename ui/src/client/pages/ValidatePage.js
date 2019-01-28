import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { validateGame } from '../actions';

class ValidatePage extends Component {
  componentDidMount() {
    this.props.validateGame(this.props.match.params.contract, this.props.match.params.address, this.props.match.params.week);
  }

  render() {
    return (
      <div>
        <p>scores are valid once all league members minus the poster has validated the scores</p>
        <Link to={`/league/${this.props.match.params.contract}/team/${this.props.match.params.address}/${this.props.match.params.week}`}>
          <button>back</button>
        </Link>
      </div>
    );
  }
}

const loadData = store => {
  return store.dispatch(validateGame(this.props.match.params.contract, this.props.match.params.address, this.props.match.params.week));
}

export default {
  loadData,
  component: connect(null, { validateGame })(ValidatePage)
}