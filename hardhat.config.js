require("@nomiclabs/hardhat-waffle");

const INFURA_ENDPOINT = process.env.INFURA_ENDPOINT;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: INFURA_ENDPOINT,
      accounts: [PRIVATE_KEY],
    },
  },
  paths: {
    sources: "./src/contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./src/artifacts",
  },
};
