import web3 from './web3';
import Players from '../../../../build/contracts/Players.json';

export default address => {
  return new web3.eth.Contract(Players.abi, address);
}
