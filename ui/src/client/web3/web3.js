import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // the app is running in the browser and metamask is available
  web3 = new Web3(window.web3.currentProvider);
} else {
  // the app is either still on the server or the user is not using metamask
  const provider = new Web3.providers.HttpProvider('http://localhost:8545');
  web3 = new Web3(provider);
}

export default web3;