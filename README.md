# decentralized-fantasy-sports

Football is a popular sport played in North America. Fantasy football is a why for fans to play games against each other using real data and stats from game results. see https://en.wikipedia.org/wiki/Fantasy_sport

## Getting started

Make sure ganache and truffle are installed globally.

```sh
npm install -g ganache-cli
```
```sh
npm install -g truffle
```

Open a terminal window and start up the local private blockchain.

```sh
ganache-cli
```

Now open Chrome, copy the mnemonic to your MetaMask, and connect to localhost 8545


Open a new terminal tab and cd into the project directory; then run build, migrate, and test the truffle project.

```sh
truffle build
```
```sh
truffle migrate --reset
```
```sh
truffle test
```

After the test runs, you will see two addresses are printed out near the top. Open final-project-hansenlin/ui/src/client/actions/index.js and copy the first address to the value of `"logic"` on line 7 and paste the second address to the value of `"factoraddress"` on line 8.

Open a new terminal tab and cd to final-project-hansenlin/ and run the following command:

```sh
npm run dev
```

Give the command a few seconds to build and then with the Chrome browser you configured earlier, navigate to http://localhost:3000/


## Gotchas

Solidity Enum values are exposed as integer values. Therefore when entering the playing position of your player use 1 for QB or quarterback, 2 for RB or running back, 3 for WR or wide reciever, 4 for TE or tight end, 5 for K or kicker, and 6 for DEF or defense.


## Interacting with the Rinkeby testnet contract

Start by opening final-project-hansenlin/ui/src/client/actions/index.js again and copy this address `"0x0D072C9b63222f50E7e5a7d083c306c01cCf7456"` to the value of `"logic"` on line 7 and paste the this address `"0x4be77cc37520b36A3F7FD128d374e6ABF69331E7"` to the value of `"factoraddress"` on line 8.

Now open the file final-project-hansenlin/ui/src/client/web3/web3.js and replace 'http://localhost:8545' on line 12 with `'https://rinkeby.infura.io/v3/fb08e01a1a774e4ca80c6e12c0c99ffa'`

Open your chrome browser and set your network on MetaMask to Rinkeby.

Again in your terminal cd to final-project-hansenlin/ and run the following command:

```sh
npm run dev
```

Give the command a few seconds to build and then with the Chrome browser you just configured, navigate to http://localhost:3000/


## User Journey

- First the user is presented with all the currently deployed leagues in the network. The user may choose to explore them or go on to create a new league.

- If the user wishes to create a new league s/he will need to supply 10 addresses each representing a team. Then the drafting of players will begin. Drafting ocurs in "rounds", where the sequence of picks seesaws back and forth. That is the saw the first team to pick in the first round will pick last in the second round, the last team to pick in the first round will pick first in the second round. This logic is enforced by the smart contract.

-Players will be identified primarily on their date of birth and real world draft number. If a player was undrafted enter 000 for the draft position field.

- Once the draft is over (after each team picks 8 players), the league is created and teams may then add or drop players and setup rosters for games. One thing to note is that rosters are at max 10 players.

- Once games have occured in real life the teams can then post the scores their teams have scored. The opponents in the fantasy league must have corroborating scores in order to be valid. Then all members of the fantasy league minus score poster will need to validate the scores before it is applied to the standings.

- The team with the most wins against other league members is the winner. In the event of a tie, points differential will be considered.

