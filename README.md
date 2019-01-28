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

in the test screen two address are printed out. open final-project-hansenlin/ui/src/client/actions/index.js and copy the first address to the value of "logic" on line 7 and paste the second address to "factoryaddress" on line 8. cd to final-project-hansenlin/ and run the following command.


```sh
npm run dev
```
