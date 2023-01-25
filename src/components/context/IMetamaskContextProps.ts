import { ethers } from "ethers";
import { IChocTokenRepository } from "../../repositories/ChocTokenRepository/IChocTokenRepository";
import { ICryptoRepository } from "../../repositories/CryptoRepository.ts/ICryptoRepository";

export interface IMetamaskContextProps {
  provider: ethers.providers.Web3Provider | undefined;
  setProvider: (provider: ethers.providers.Web3Provider) => void;
  connect: () => Promise<string[] | undefined>;
  isConnected: boolean;
  walletAddress: string;
  isNetworkWrong: boolean;
  chocTokenRepository?: IChocTokenRepository;
  cryptoRepository?: ICryptoRepository;
}
