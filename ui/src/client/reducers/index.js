import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import leagueReducer from './leagueReducer';
import allleaguesReducer from './allleaguesReducer';
import teamReducer from './teamReducer';
import gameReducer from './gameReducer';
import transactionReducer from './transactionReducer';
import playerReducer from './playerReducer';
import accountReducer from './accountReducer';

export default combineReducers({
  form: formReducer,
  transactions: transactionReducer,
  allleagues: allleaguesReducer,
  league: leagueReducer,
  team: teamReducer,
  game: gameReducer,
  player: playerReducer,
  account: accountReducer
});