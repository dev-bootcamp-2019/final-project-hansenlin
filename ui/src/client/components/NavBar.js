import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <ul>
      <li><Link to="/">leagues</Link></li>
      <li><Link to="/create">create league</Link></li>
      <li><Link to="/transactions">my transactions</Link></li>
    </ul>
  );
};
