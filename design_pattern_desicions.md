## Contract Design Patterns

There are 4 contracts in the project.

- The LeagueFactory contract's only job is to keep track of and deploy new Players contracts.

- The Players contract is an ERC721 based token contract that keeps track of which addresses owns which players; adding and dropping players happens here.

- The Players logic contract implements the functions inside the Players contract for the purposes of upgradability; this also consequently makes the Players contract much lighter.

- The League contract keeps track of organizing games, rosters, and standings among the teams. Note that this contract has no control over the players (non-funglible tokens) at all.

These decisions were made so that the the contracts are more flexible and upgradable.
