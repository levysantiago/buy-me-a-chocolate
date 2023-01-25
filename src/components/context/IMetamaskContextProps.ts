import { IChocTokenRepository } from "../../repositories/ChocTokenRepository/IChocTokenRepository";
import { ICryptoRepository } from "../../repositories/CryptoRepository.ts/ICryptoRepository";

export interface IMetamaskContextProps {
  connect: () => Promise<string[] | undefined>;
  isConnected: boolean;
  walletAddress: string;
  isNetworkWrong: boolean;
  chocTokenRepository?: IChocTokenRepository;
  cryptoRepository?: ICryptoRepository;
  chocBalance: string;
  cryptoBalance: string;
}
