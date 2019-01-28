## decentralized-fantasy-sports

Launch a 0x relayer in under a minute with Launch Kit. This repository contains an open-source, free-to-use 0x relayer template that you can use as a starting point for your own project.

-   Quickly launch a market for your community token
-   Seemlessly create an in-game marketplace for digital items and collectibles
-   Enable trading of any ERC-20 or ERC-721 asset

Fork this repository to get started!

## Language choice

`0x-launch-kit` ships with 2 codebases, one in Typescript and another in Javascript. Although the Javascript is auto-generated from the Typescript, we made sure the Javascript generated is readable.

Before you start using `0x-launch-kit`, choose whether you want your codebase to be in Typescript or Javascript.

**If you want to work in Javascript:**

-   delete the `ts` directory
-   delete all scripts from `package.json` that end with `:ts`

**If you want to work in Typescript:**

-   delete the `js` directory
-   delete all scripts from `package.json` that end with `:js`

## Getting started

#### Pre-requirements

-   [node](https://nodejs.org/en/download/) > v8.x
-   [truffle](https://yarnpkg.com/en/) > v1.x
-   [ganache-cli](https://yarnpkg.com/en/) > v1.x

To develop ontop of `0x-launch-kit`, follow the following instructions:

1. Fork this repository
2. Clone your fork of this repository
3. Open the `config.ts`/`config.js` file (depending on the language you've chosen above) and edit the following:

-   `NETWORK_ID` -- the network you'd like your relayer to run on (e.g: `1` -> mainnet, `42` -> Kovan, 3 -> Ropsten, etc...)
-   `WHITELISTED_TOKENS` -- Which tokens you would like to host orderbooks for.
-   `FEE_RECIPIENT` -- The Ethereum address which should be specified as the fee recipient in orders your relayer accepts.
-   `MAKER_FEE_ZRX_UNIT_AMOUNT` -- The flat maker fee you'd like to receive for filled orders hosted by you.
-   `TAKER_FEE_ZRX_UNIT_AMOUNT` -- The flat taker fee you'd like to receive for filled orders hosted by you.

4. Make sure you have [Yarn](https://yarnpkg.com/en/) installed.
5. Install the dependencies

```sh
yarn
```

6. Build the project [This step is for Typescript users only]

```sh
yarn build:ts
```

or build & watch:

```sh
yarn watch:ts
```

**Note:** There isn't currently a build step when working on the Javascript codebase because we assume `0x-launch-kit` will be running on Node.js > v8.0. If you want this project to work in an environment that doesn't support many of the latest Javascript features, you will need to add a transpiler (e.g [Babel](https://babeljs.io/)) to this project.

7.  Start the relayer

```sh
yarn start:ts
```

OR

```sh
yarn start:js
```

## Client for your relayer's API

Since the `0x-launch-kit` relayer adheres to V2 of the [Standard Relayer API Specification](https://github.com/0xProject/standard-relayer-api/), you can use [0x Connect](https://0xproject.com/docs/connect) (an HTTP/Websocket client) to make calls to your relayer (e.g submit an order, get all orders, etc...)

Learn how to use 0x Connect to interact with your `0x-launch-kit` relayer in [this tutorial](https://0xproject.com/wiki#Find,-Submit,-Fill-Order-From-Relayer).

To quickly check if your relayer is up-and-running, send it this CURL request from the command-line:

```sh
curl http://localhost:3000/v2/orders
```

If everything is working as expected, you should see this response:

```
{
    "total": 0,
    "page": 0,
    "perPage": 20,
    "records": []
}
```

Since no orders have been added to your relayer yet, the `records` array is empty.

## Commands

Typescript project commands:

-   `yarn build:ts` - Build the code
-   `yarn lint:ts` - Lint the code
-   `yarn start:ts` - Starts the relayer
-   `yarn watch:ts` - Watch the source code and rebuild on change
-   `yarn prettier:ts` - Auto-format the code

Javascript project commands:

-   `yarn start:js` - Start the relayer
-   `yarn prettier:js` - Auto-format the code

## Database

This project uses [TypeORM](https://github.com/typeorm/typeorm). It makes it easier for anyone to switch out the backing database used by this project. By default, this project uses an [SQLite](https://sqlite.org/docs.html) database.

Because we want to support both Javascript and Typescript codebases, we don't use `TypeORM`'s [decorators](https://github.com/typeorm/typeorm/blob/master/docs/decorator-reference.md) (since they don't transpile nicely into readable Javascript). TypeORM shines with decorators however, so you might want to use them if you're going to be working in Typescript.

## Deployment

`0x-launch-kit` ships as a docker container. First, install Docker ([mac](https://docs.docker.com/docker-for-mac/install/), [windows](https://docs.docker.com/docker-for-windows/install/)). To build the image run:

```sh
docker build -t 0x-launch-kit .
```

You can check that the image was built by running:

```sh
docker images
```

And launch it with

```sh
docker run -p 3000:3000 -d 0x-launch-kit
```

Check that it's working by running

```
curl http://localhost:3000/v2/asset_pairs
```