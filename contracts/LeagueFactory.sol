pragma solidity ^0.5.0;

import './Players.sol';

contract LeagueFactory {
  Players[] public deployedLeagues;
  function createLeague(address _playersLogic, address[10] memory _teams) public {
    Players playersContract = new Players(_playersLogic, _teams);
    deployedLeagues.push(playersContract);
  }
  function getDeployedLeagues() public view returns (Players[] memory) {
    return deployedLeagues;
  }
}
