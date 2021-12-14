require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const INFURA_ENDPOINT = process.env.INFURA_ENDPOINT;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const LOCAL_PRIVATE_KEY = process.env.LOCAL_PRIVATE_KEY;
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: INFURA_ENDPOINT,
      accounts: [PRIVATE_KEY],
    },
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [LOCAL_PRIVATE_KEY],
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
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
