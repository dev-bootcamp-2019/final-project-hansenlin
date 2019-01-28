import web3 from './web3';
import League from '../../../../build/contracts/League.json';

export default address => {
  return new web3.eth.Contract(League.abi, address);
}