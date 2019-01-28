import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTransactions } from '../actions';

class TransactionsPage extends Component {
  componentDidMount() {
    this.props.fetchTransactions();
  }

  renderTransactions = () => {
    const transactions = this.props.transactions.map((tx, index) => {
      return (
        <div key={index}>
          {tx}
        </div>
      )
    });
    return transactions;
  }

  render() {
    return (
      <div>
        <h3>my transactions</h3>
        {this.renderTransactions()}
        <br />
        <Link to={`/`}>
          <button>back</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { transactions: state.transactions };
}

const loadData = store => {
  return store.dispatch(fetchTransactions());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchTransactions })(TransactionsPage)
}