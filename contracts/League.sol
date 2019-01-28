pragma solidity ^0.5.0;

contract League {

  struct Team {
    uint8 wins;
    uint8 loses;
    uint8 ties;
    mapping(uint8 => Game) schedule;
  }

  struct Roster {
    uint256 QB;
    uint256 RB;
    uint256 WR1;
    uint256 WR2;
    uint256 TE;
    uint256 FLEX;
    uint256 K;
    uint256 DEF;
  }

  struct Game {
    address opponent;
    uint8 teamScore;
    uint8 opponentScore;
    uint8 approvalCount;
    bool scoresSet;
    Roster roster;
    mapping(address => bool) approvals;
  }

  mapping(address => Team) public teamsMap;
  mapping(address => uint8[16]) public seasonSchedule;

  address public league;
  address[10] public teams;

  constructor(address _league, address[10] memory _teams) public {
    league = _league;
    teams = _teams;
    for (uint8 i=0; i<teams.length; i++) {
      teamsMap[teams[i]] = Team({
        wins: 0,
        loses: 0,
        ties: 0
      });
    }
    seasonSchedule[teams[0]] = [1, 6, 2, 7, 3, 8, 4, 9, 5, 1, 6, 2, 7, 3, 8, 4];
    seasonSchedule[teams[1]] = [0, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 3, 4, 5, 6, 7];
    seasonSchedule[teams[2]] = [9, 1, 0, 3, 4, 5, 6, 7, 8, 9, 1, 0, 3, 4, 5, 6];
    seasonSchedule[teams[3]] = [8, 9, 1, 2, 0, 4, 5, 6, 7, 8, 9, 1, 2, 0, 4, 5];
    seasonSchedule[teams[4]] = [7, 8, 9, 1, 2, 3, 0, 5, 6, 7, 8, 9, 1, 2, 3, 0];
    seasonSchedule[teams[5]] = [6, 7, 8, 9, 1, 2, 3, 4, 0, 6, 7, 8, 9, 1, 2, 3];
    seasonSchedule[teams[6]] = [5, 0, 7, 8, 9, 1, 2, 3, 4, 5, 0, 7, 8, 9, 1, 2];
    seasonSchedule[teams[7]] = [4, 5, 6, 0, 8, 9, 1, 2, 3, 4, 5, 6, 0, 8, 9, 1];
    seasonSchedule[teams[8]] = [3, 4, 5, 6, 7, 0, 9, 1, 2, 3, 4, 5, 6, 7, 0, 9];
    seasonSchedule[teams[9]] = [2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  }

  function setRoster(uint8 _week, uint256 _qbId, uint256 _rbId, uint256 _wr1Id, uint256 _wr2Id, uint256 _teId, uint256 _flexId, uint256 _kId, uint256 _defId, address sender) public {
    require(msg.sender == league);
    teamsMap[sender].schedule[_week] = Game({
      opponent: teams[seasonSchedule[sender][_week]],
      teamScore: 0,
      opponentScore: 0,
      approvalCount: 0,
      scoresSet: false,
      roster: Roster({
        QB: _qbId,
        RB: _rbId,
        WR1: _wr1Id,
        WR2: _wr2Id,
        TE: _teId,
        FLEX: _flexId,
        K: _kId,
        DEF: _defId
      })
    });
  }

  function setScores(uint8 _week, uint8 _teamScore, uint8 _opponentScore) public {
    Game storage game = teamsMap[msg.sender].schedule[_week];
    require(game.scoresSet == false);
    game.teamScore = _teamScore;
    game.opponentScore = _opponentScore;
    game.scoresSet = true;
  }

  function validateGame(address _team, uint8 _week) public {
    require(msg.sender != _team);
    Game storage game = teamsMap[_team].schedule[_week];
    require(game.scoresSet == true);

    require(game.teamScore == teamsMap[game.opponent].schedule[_week].opponentScore);
    require(game.opponentScore == teamsMap[game.opponent].schedule[_week].teamScore);
    game.approvals[msg.sender] = true;
    game.approvalCount++;
    if (game.approvalCount == 9) {
      if (game.teamScore == game.opponentScore) {
        teamsMap[_team].ties++;
      }
      if (game.teamScore > game.opponentScore) {
        teamsMap[_team].wins++;
      } else {
        teamsMap[_team].loses++;
      }
    }
  }

  function getGame(address _team, uint8 _week) public view returns (uint8, uint8) {
    Game storage game = teamsMap[_team].schedule[_week];
    return (game.teamScore, game.opponentScore);
  }

  function teamSnapshot(address _team) public view returns (uint8, uint8, uint8, uint8[16] memory) {
    Team storage team = teamsMap[_team];
    return (team.wins, team.loses, team.ties, seasonSchedule[_team]);
  }

  function leagueSnapshot() public view returns (address[10] memory) {
    return (teams);
  }

}
