import ActionButton from "./ActionButton";

declare let window: any;

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen px-4 text-center bg-bkgrnd">
      <p className="text-3xl">You are not on Polygon TestNet.</p>
      <p className="text-3xl">
        If it is not added to your wallet you can add it from button below 👇
      </p>

      <div className="flex items-center justify-center mt-10 cursor-pointer bg-frgrnd text-bkgrnd w-60 h-14">
        <ActionButton
          text="Add Polygon Testnet"
          clickHandler={() => {
            window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainName: "Polygon Amoy",
                  chainId: "0x80002",
                  nativeCurrency: {
                    name: "MATIC",
                    symbol: "MATIC",
                    decimals: 18,
                  },
                  rpcUrls: ["https://rpc-amoy.polygon.technology/"],
                  blockExplorerUrls: ["https://www.oklink.com/amoy"],
                },
              ],
            });
          }}
        />
      </div>
    </div>
  );
};

export default NotFound;
