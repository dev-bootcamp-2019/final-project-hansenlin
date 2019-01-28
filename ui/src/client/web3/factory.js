import web3 from './web3';
import LeagueFactory from '../../../../build/contracts/LeagueFactory.json';

export default address => {
  return new web3.eth.Contract(LeagueFactory.abi, address);
}
