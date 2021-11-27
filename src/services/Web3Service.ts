import { ethers } from "ethers";
import KolumnArtifact from "../abis/KolumnKontract.json";

declare let window: any;
const address = KolumnArtifact.networks[5777].address;

export const Web3Service = {
  //Check if user is connected to metamask or not
  isConnected: async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      try {
        await signer.getAddress();
        return true;
      } catch {
        return false;
      }
    } else {
      throw Error("Metamask Not Found");
    }
  },
  //Connect to Metamask
  connect: async () => {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } else {
      throw Error("Metamask Not Found");
    }
  },
};
