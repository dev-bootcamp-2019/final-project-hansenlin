const League = artifacts.require("./League.sol");
const Players = artifacts.require('Players');

module.exports = async (deployer, network, accounts) => {
  const instance = await Players.deployed();
  const _teams = [accounts[0], accounts[1], accounts[2], accounts[3], accounts[4], accounts[5], accounts[6], accounts[7], accounts[8], accounts[9]];
  await deployer.deploy(League, instance.address, _teams);
};
