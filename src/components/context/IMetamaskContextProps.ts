import { ethers } from "ethers";

export interface IMetamaskContextProps {
  provider: ethers.providers.Web3Provider | undefined;
  setProvider: (provider: ethers.providers.Web3Provider) => void;
  connect: () => Promise<string[] | undefined>;
  isConnected: boolean;
  walletAddress: string;
  isNetworkWrong: boolean;
}
