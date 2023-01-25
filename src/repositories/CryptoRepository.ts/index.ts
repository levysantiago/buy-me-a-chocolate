import { BigNumber, ethers } from "ethers";
import { ICryptoRepository } from "./ICryptoRepository";

class CryptoRepository implements ICryptoRepository {
  private provider: ethers.providers.Web3Provider;

  constructor(provider: ethers.providers.Web3Provider) {
    this.provider = provider;
  }

  init(provider: ethers.providers.Web3Provider): void {
    this.provider = provider;
  }

  balanceOf(address: string): Promise<BigNumber> {
    return this.provider.getBalance(address);
  }
}

export default CryptoRepository;
