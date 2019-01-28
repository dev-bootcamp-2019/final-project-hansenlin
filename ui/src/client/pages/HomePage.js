import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchAll } from '../actions';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchAll();
  }

  renderLeagues = () => {
    const items = this.props.allleagues.map((address, index) => {
      return (
        <div key={index}>
          <Link to={`/league/${address}`}>
            <button>{address}</button>
          </Link>
          <Link to={`/league/${address}/draft`}>
            <button>draft player</button>
          </Link>
        </div>
      )
    });
    return items;
  }

  render() {
    return (
      <div>
        <h3>all leagues</h3>
        {this.renderLeagues()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { allleagues: state.allleagues };
}

const loadData = store => {
  return store.dispatch(fetchAll());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchAll })(HomePage)
};
