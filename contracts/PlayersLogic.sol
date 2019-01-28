pragma solidity ^0.5.0;

import 'openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';

contract PlayersLogic is ERC721 {

  enum Position { FA, QB, RB, WR, TE, K, DEF }

  struct Player {
    bytes32 name;
    Position position;
  }

  uint8 public currentDraftPosition = 0;
  mapping(uint8 => address) public draftPosition;
  mapping(uint256 => Player) public players;

  function draftPlayer(bytes32 _name, uint256 _position, uint256 _playerId) public {
    require(currentDraftPosition < 80);
    require(msg.sender == draftPosition[currentDraftPosition]);
    require(Position(_position) != Position.FA);
    players[_playerId] = Player({ name: _name, position: Position(_position) });
    _mint(msg.sender, _playerId);
    currentDraftPosition++;
  }

  function dropPlayer(uint256 _playerId) public {
    _burn(_playerId);
    players[_playerId].position = Position.FA;
  }

  function addPlayer(bytes32 _name, uint256 _position, uint256 _playerId) public {
    require(currentDraftPosition == 80);
    require(balanceOf(msg.sender) < 11);
    require(Position(_position) != Position.FA);
    players[_playerId] = Player({ name: _name, position: Position(_position)});
    _mint(msg.sender, _playerId);
  }

}
