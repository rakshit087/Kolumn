module.exports = {
  //Network Config
  networks: {
    development: {
      host: "127.0.0.1", // Localhost
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
  },

  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",

  //Compiler Config
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      version: "0.8.10",
    },
  },
};
