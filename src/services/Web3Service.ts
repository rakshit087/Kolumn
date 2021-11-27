import Web3 from "web3";

let selectedAccount;
declare let window: any;

export const Web3Service = {
  init: async () => {
    let provider = window.ethereum;
    if (typeof provider !== "undefined") {
      //Get accounts and set selected account
      const accounts = provider.request({ method: "eth_requestAccounts" });
      selectedAccount = accounts[0];
      //If selected account is changed
      window.ethereum.on("accountsChanged", (accounts: Array<string>) => {
        selectedAccount = accounts[0];
      });
    }
    const web3 = new Web3(provider);
  },
};
