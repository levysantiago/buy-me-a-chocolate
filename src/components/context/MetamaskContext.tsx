import { ethers } from "ethers";
import { createContext } from "react";
import { IMetamaskContextProps } from "./IMetamaskContextProps";

export const MetamaskContext = createContext<IMetamaskContextProps>({
  provider: undefined,
  setProvider: (provider: ethers.providers.Web3Provider) => {},
  connect: () => {
    return new Promise(() => {});
  },
  isConnected: false,
  walletAddress: "",
  isNetworkWrong: false,
  chocTokenRepository: undefined,
  cryptoRepository: undefined,
});
