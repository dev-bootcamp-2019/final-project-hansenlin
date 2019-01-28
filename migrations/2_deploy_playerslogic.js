const PlayersLogic = artifacts.require("./PlayersLogic.sol");

module.exports = deployer => {
  deployer.deploy(PlayersLogic);
};
