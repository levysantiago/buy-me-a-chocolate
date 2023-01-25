import { ethers } from "ethers";

export interface ICryptoRepository {
  init(provider: ethers.providers.Web3Provider): void;
  balanceOf(address: string): Promise<ethers.BigNumber>;
}
