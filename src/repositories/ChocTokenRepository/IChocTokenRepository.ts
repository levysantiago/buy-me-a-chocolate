import { ethers } from "ethers";

export interface IChocTokenRepository {
  init(provider: ethers.providers.Web3Provider): void;
  balanceOf(address: string): Promise<ethers.BigNumber>;
}
