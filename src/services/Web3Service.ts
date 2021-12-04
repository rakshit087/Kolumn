import { ethers } from "ethers";
import KolumnArtifact from "../artifacts/src/contracts/KolumnKontract.sol/KolumnKontract.json";

declare let window: any;

export const Web3Service = {
  //Add Event Listners and check for Metamask
  init: async () => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
      window.ethereum.on("disconnect", () => {
        console.log("Disconnected");
        window.location.reload();
      });
      window.ethereum.on("connect", () => {
        window.location.reload();
      });
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    } else {
      throw Error("Metamask Not Found");
    }
  },
  //Connect to Metamask
  connect: async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  },
  //Check if user is connected to metamask or not
  isConnected: async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    try {
      await signer.getAddress();
      return true;
    } catch {
      return false;
    }
  },
  //Get Current Wallet Address
  getWallet: async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const wallet = await signer.getAddress();
    return wallet;
  },
};
