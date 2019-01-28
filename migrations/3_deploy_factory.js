const LeagueFactory = artifacts.require("./LeagueFactory.sol");

module.exports = deployer => {
  deployer.deploy(LeagueFactory);
};
