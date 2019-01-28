import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchGame } from '../actions';

class GamePage extends Component {
  componentDidMount() {
    this.props.fetchGame(this.props.match.params.contract, this.props.match.params.address, this.props.match.params.week);
  }

  render() {
    return (
      <div>
        <h3>week {Number(this.props.match.params.week) + 1} result:</h3>
        <div>{this.props.game[0]} - {this.props.game[1]}</div>
        <Link to={`/league/${this.props.match.params.contract}/team/${this.props.match.params.address}/${this.props.match.params.week}/validate`}>
          <button>validate</button>
        </Link>
        <Link to={`/league/${this.props.match.params.contract}/team/${this.props.match.params.address}`}>
          <button>back</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { game: state.game };
}

const loadData = store => {
  return store.dispatch(fetchGame(this.props.match.params.contract, this.props.match.params.address, this.props.match.params.week));
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchGame })(GamePage)
}
