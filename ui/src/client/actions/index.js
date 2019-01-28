//import Web3 from 'web3';
import web3 from '../web3/web3';
import Factory from '../web3/factory';
import Players from '../web3/players';
import League from '../web3/league';

let logic = "0xb5A58a95eD9A96f5fDc3919Ee32D7E64522a956f";
let factoraddress = "0x0ce697654F1D77a8Ad69556E7a88Ddbc4Bdfbb73";

const factory = Factory(factoraddress);

export const FETCH_TRANSACTIONS = 'fetch_transactions';
export const fetchTransactions = () => {
  return {
    type: FETCH_TRANSACTIONS
  };
};

export const FETCH_PLAYER = 'fetch_player';
export const searchPlayer = (formValues, contract) => {  
  return async dispatch => {
    function onSuccess(success) {
      dispatch({ type: FETCH_PLAYER, payload: success });
    }
    function onError(error) {
      dispatch({ type: FETCH_PLAYER, payload: "none one" });
    }
    try {
      const players = Players(contract);
      const playerId = formValues.year+formValues.month+formValues.day+formValues.draftnumber;
      const success = await players.methods.ownerOf(playerId).call();
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  }
}

export const FETCH_ALL = 'fetch_all';
export const fetchAll = () => async dispatch => {
  const response = await factory.methods.getDeployedLeagues().call();
  dispatch({
    type: FETCH_ALL,
    payload: response
  });
};

export const FETCH_LEAGUE = 'fetch_league';
export const fetchLeague = address => async dispatch => {
  const players = Players(address);
  const playersAddress = await players.methods.league().call();
  const league = League(playersAddress);
  const response = await league.methods.leagueSnapshot().call();
  dispatch({
    type: FETCH_LEAGUE,
    payload: response
  });
};

export const FETCH_TEAM = 'fetch_team';
export const fetchTeam = (contract, address) => async dispatch => {
  const players = Players(contract);
  const playersAddress = await players.methods.league().call();
  const league = League(playersAddress);
  let response = await league.methods.teamSnapshot(address).call();
  const teams = await league.methods.leagueSnapshot().call();
  response[4] = teams;
  dispatch({
    type: FETCH_TEAM,
    payload: response
  });
};

export const FETCH_GAME = 'fetch_game';
export const fetchGame = (contract, address, week) => async dispatch => {
  const players = Players(contract);
  const playersAddress = await players.methods.league().call();
  const league = League(playersAddress);
  const response = await league.methods.getGame(address, week).call();

  dispatch({
    type: FETCH_GAME,
    payload: response
  });
};

export const CREATE_LEAGUE = 'create_league';
export const createLeague = formValues => async dispatch => {
  const accounts = await web3.eth.getAccounts();
  const response = await factory.methods.createLeague(logic, [formValues.teamone, formValues.teamtwo, formValues.teamthree, formValues.teamfour, formValues.teamfive, formValues.teamsix, formValues.teamseven, formValues.teameight, formValues.teamnine, formValues.teamten]).send({ from: accounts[0] });

  dispatch({
    type: CREATE_LEAGUE,
    payload: response.transactionHash
  });
};

export const ADD_PLAYER = 'add_player';
export const addPlayer = (formValues, contract) => async dispatch => {
  const accounts = await web3.eth.getAccounts();
  const players = Players(contract);
  const playerId = formValues.year+formValues.month+formValues.day+formValues.draftnumber;
  const response = await players.methods.addPlayer(web3.utils.sha3(formValues.name), formValues.position, playerId).send({ from: accounts[0] });

  dispatch({
    type: ADD_PLAYER,
    payload: response.transactionHash
  });
};

export const DRAFT_PLAYER = 'add_player';
export const draftPlayer = (formValues, contract) => async dispatch => {
  const accounts = await web3.eth.getAccounts();
  const players = Players(contract);
  const playerId = formValues.year+formValues.month+formValues.day+formValues.draftnumber;
  const response = await players.methods.draftPlayer(web3.utils.sha3(formValues.name), formValues.position, playerId).send({ from: accounts[0] });

  dispatch({
    type: DRAFT_PLAYER,
    payload: response.transactionHash
  });
};

export const DROP_PLAYER = 'drop_player';
export const dropPlayer = (formValues, contract) => async dispatch => {
  const accounts = await web3.eth.getAccounts();
  const players = Players(contract);
  const playerId = formValues.year+formValues.month+formValues.day+formValues.draftnumber;
  const response = await players.methods.dropPlayer(playerId).send({ from: accounts[0] });

  dispatch({
    type: DROP_PLAYER,
    payload: response.transactionHash
  });
};

export const SET_ROSTER = 'set_roster';
export const setRoster = (formValues, contract) => async dispatch => {
  const accounts = await web3.eth.getAccounts();
  const players = Players(contract);
  const response = await players.methods.setRoster(formValues.week, formValues.QB, formValues.RB, formValues.WR1, formValues.WR2, formValues.TE, formValues.FLEX, formValues.K, formValues.DEF).send({ from: accounts[0] });

  dispatch({
    type: SET_ROSTER,
    payload: response.transactionHash
  });
};

export const VALIDATE_GAME = 'validate_game';
export const validateGame = (contract, address, week) => async dispatch => {
  const accounts = await web3.eth.getAccounts();
  const players = Players(contract);
  const playersAddress = await players.methods.league().call();
  const league = League(playersAddress);
  const response = await league.methods.validateGame(address, week).send({ from: accounts[0] });

  dispatch({
    type: VALIDATE_GAME,
    payload: response.transactionHash
  });
};

export const SET_SCORES = 'set_scores';
export const setScores = (formValues, contract, week) => async dispatch => {
  const accounts = await web3.eth.getAccounts();
  const players = Players(contract);
  const playersAddress = await players.methods.league().call();
  const league = League(playersAddress);
  const response = await league.methods.setScores(week, formValues.teamscore, formValues.opponentscore).send({ from: accounts[0] });

  dispatch({
    type: SET_SCORES,
    payload: response.transactionHash
  });
};
