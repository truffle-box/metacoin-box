# MetaCoin Box

- [Requirements](#requirements)
- [Setup](#setup)
    - [Installation](#installation)
    - [Deployment](#deployment)
- [Usage](#usage)
    - [Commands](#commands)
    - [Testing](#testing)
- [Support](#support)

This is an example of a completed coin-like contract built using Truffle. Note that this is not [ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) compatible, so it is not expected to interact with other coin/token contracts.

## Requirements

The MetaCoin box has the following requirements:

- [Node.js](https://nodejs.org/) v12 or higher
- [Truffle](https://trufflesuite.com/docs/truffle/getting-started/installation)
- [Ganache](https://github.com/trufflesuite/ganache#getting-started)

Helpful, but optional:

- An [Infura](https://infura.io/) account and Project ID
- A [MetaMask](https://metamask.io/) account

## Setup

### Installation

```bash
$ truffle unbox metacoin
```
### Deployment

To deploy locally, start a local instance of ganache by running `ganache`
Then, simply call `truffle migrate`

### Testing

This box has examples for testing your smart contracts in both Javascript and Solidity.

To run the tests locally, call `truffle test`

## Support

Need help? Get in touch with the Truffle community by posting on [Github Discussions](https://github.com/orgs/trufflesuite/discussions)!