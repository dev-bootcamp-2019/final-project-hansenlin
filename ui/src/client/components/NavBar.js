import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAccount } from '../actions';


class NavBar extends Component {
  componentDidMount() {
    this.props.getAccount();
  }

  render() {
    return (
      <div>
        <div>
          current account: {this.props.account}
        </div>
        <button><Link to="/">leagues</Link></button>
        <button><Link to="/create">create league</Link></button>
        <button><Link to="/transactions">my transactions</Link></button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { account: state.account };
}

export default connect(mapStateToProps, { getAccount })(NavBar);