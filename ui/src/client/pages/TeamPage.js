import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTeam } from '../actions';

class TeamPage extends Component {
  componentDidMount() {
    this.props.fetchTeam(this.props.match.params.contract, this.props.match.params.address);
  }

  renderSchedule = () => {
    if (this.props.team[3] != undefined) {
      const schedule = this.props.team[3].map((opponent, index) => {
        return (
          <div key={index}>
            <Link to={`/league/${this.props.match.params.contract}/team/${this.props.match.params.address}/${index}`}>
              <button>week {index+1}: {this.props.team[4][opponent]}</button>
            </Link>
            <Link to={`/league/${this.props.match.params.contract}/team/${this.props.match.params.address}/${index}/set`} key={index+20}>
              <button>set week {index+1} scores</button>
            </Link>
          </div>
        )
      });
      return schedule;
    }
  }

  render() {
    return (
      <div>
        <h3>team standings</h3>
        <div>{this.props.team[0]} wins</div>
        <div>{this.props.team[1]} loses</div>
        <div>{this.props.team[2]} ties</div>
        <h3>season schedule</h3>
        {this.renderSchedule()}
        <Link to={`/league/${this.props.match.params.contract}`}>
          <button>back</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { team: state.team };
}

const loadData = store => {
  return store.dispatch(fetchTeam(this.props.match.params.contract, this.props.match.params.address));
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchTeam })(TeamPage)
}
