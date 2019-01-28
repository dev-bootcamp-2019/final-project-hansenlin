pragma solidity ^0.5.0;

import 'openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import './League.sol';

contract Players is ERC721 {

  enum Position { FA, QB, RB, WR, TE, K, DEF }

  struct Player {
    bytes32 name;
    Position position;
  }

  uint8 public currentDraftPosition = 0;
  mapping(uint8 => address) public draftPosition;
  mapping(uint256 => Player) public players;

  address public playersLogic;
  League public league;

  constructor(address _playersLogic, address[10] memory _teams) ERC721() public {
    playersLogic = _playersLogic;
    uint8 j = 19;
    uint8 k = 1;
    for (uint8 i=0; i<_teams.length; i++) {
      draftPosition[i] = _teams[i];
      draftPosition[i+j] = _teams[i];
      draftPosition[i+j+k] = _teams[i];
      draftPosition[i+2*j+k] = _teams[i];
      draftPosition[i+2*j+2*k] = _teams[i];
      draftPosition[i+3*j+2*k] = _teams[i];
      draftPosition[i+3*j+3*k] = _teams[i];
      draftPosition[i+4*j+3*k] = _teams[i];
      j-=2;
      k+=2;
    }
  }

  function draftPlayer(bytes32 _name, uint256 _position, uint256 _playerId) public {
    (bool res,) = playersLogic.delegatecall(abi.encodePacked(bytes4(keccak256("draftPlayer(bytes32,uint256,uint256)")), _name, _position, _playerId));
    if(!res) revert();
    if (currentDraftPosition == 80) {
      league = new League(address(this), [draftPosition[0], draftPosition[1], draftPosition[2], draftPosition[3], draftPosition[4], draftPosition[5], draftPosition[6], draftPosition[7], draftPosition[8], draftPosition[9]]);
    }
  }

  function dropPlayer(uint256 _playerId) public {
    (bool res,) = playersLogic.delegatecall(abi.encodePacked(bytes4(keccak256("dropPlayer(uint256)")), _playerId));
    if(!res) revert();
  }

  function addPlayer(bytes32 _name, uint256 _position, uint256 _playerId) public {
    (bool res,) = playersLogic.delegatecall(abi.encodePacked(bytes4(keccak256("addPlayer(bytes32,uint256,uint256)")), _name, _position, _playerId));
    if(!res) revert();
  }

  function setRoster(uint8 _week, uint256 _qbId, uint256 _rbId, uint256 _wr1Id, uint256 _wr2Id, uint256 _teId, uint256 _flexId, uint256 _kId, uint256 _defId) public {
    require(ownerOf(_qbId) == msg.sender);
    require(players[_qbId].position == Position.QB);
    require(ownerOf(_rbId) == msg.sender);
    require(players[_rbId].position == Position.RB);
    require(ownerOf(_wr1Id) == msg.sender);
    require(players[_wr1Id].position == Position.WR);
    require(ownerOf(_wr2Id) == msg.sender);
    require(players[_wr2Id].position == Position.WR);
    require(ownerOf(_teId) == msg.sender);
    require(players[_teId].position == Position.TE);
    require(ownerOf(_flexId) == msg.sender);
    require(players[_flexId].position == Position.RB || players[_flexId].position == Position.WR || players[_flexId].position == Position.TE);
    require(ownerOf(_kId) == msg.sender);
    require(players[_kId].position == Position.K);
    require(ownerOf(_defId) == msg.sender);
    require(players[_defId].position == Position.DEF);
    league.setRoster(_week, _qbId, _rbId, _wr1Id, _wr2Id, _teId, _flexId, _kId, _defId, msg.sender);
  }

}
