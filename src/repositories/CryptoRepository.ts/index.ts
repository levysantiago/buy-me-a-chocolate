import { ethers } from 'ethers'
import { ICryptoRepository } from './ICryptoRepository'

class CryptoRepository implements ICryptoRepository {
  private provider: ethers.providers.Web3Provider

  constructor(provider: ethers.providers.Web3Provider) {
    this.provider = provider
  }

  init(provider: ethers.providers.Web3Provider): void {
    this.provider = provider
  }

  async balanceOf(address: string): Promise<string> {
    const balance = await this.provider.getBalance(address)
    return ethers.utils.formatEther(balance)
  }
}

export default CryptoRepository
