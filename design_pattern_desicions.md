##Design Patters

there are 4 contracts

- The LeagueFactory contract is only supposed to keep track and deploy Players contracts

- The Players contract is an ERC721 token that keeps track of which address has which players; adding and dropping players happes here.

- The Players logic contract implements the functions inside the Players contract for the purposes of upgradability.

- The League contract keeps track of organizing games, rosters, and standings among the teams.

These decisions were made so that the the contracts are more flexible and upgradable.
