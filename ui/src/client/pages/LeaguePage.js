import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchLeague } from '../actions';


class LeaguePage extends Component {
  componentDidMount() {
    this.props.fetchLeague(this.props.match.params.contract);
  }

  renderTeams = () => {
    const teams = this.props.league.map((address, index) => {
      return (
        <Link to={`/league/${this.props.match.params.contract}/team/${address}`} key={index}>
          <button>{address}</button>
        </Link>
      )
    });
    return teams;
  }

  render() {
    return (
      <div>
        <h3>teams</h3>
        {this.renderTeams()}
        <br />
        <h4>manage roster</h4>
        <Link to={`/league/${this.props.match.params.contract}/add`}>
          <button>add player</button>
        </Link>
        <Link to={`/league/${this.props.match.params.contract}/drop`}>
          <button>drop player</button>
        </Link>
        <Link to={`/league/${this.props.match.params.contract}/find`}>
          <button>search player</button>
        </Link>
        <Link to={`/league/${this.props.match.params.contract}/setroster`}>
          <button>set roster</button>
        </Link>
        <Link to={`/`}>
          <button>back</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { league: state.league };
}

const loadData = store => {
  return store.dispatch(fetchLeague(this.props.match.params.contract));
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchLeague })(LeaguePage)
}