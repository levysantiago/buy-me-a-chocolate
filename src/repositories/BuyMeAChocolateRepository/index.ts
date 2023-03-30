import { Web3Provider } from '@ethersproject/providers'
import { ethers } from 'ethers'
import { BuyMeAChocolateABI as IBuyMeAChocolateABI } from '../../smc-types'
import { BuyMeAChocolateABI__factory as BuyMeAChocolateTypedFactory } from '../../smc-types/factories'
import { BigNumber as BN } from 'bignumber.js'
import { IBuyMeAChoclateRepository } from './IBuyMeAChocolateRepository'

class BuyMeAChocolateRepository implements IBuyMeAChoclateRepository {
  private buyChocolateContract: IBuyMeAChocolateABI | undefined

  constructor(provider: Web3Provider) {
    if (provider) {
      this.init(provider)
    }
  }

  private validate() {
    if (!this.buyChocolateContract) {
      throw new Error('Buy Chocolate Contract not defined')
    }
  }

  async init(provider: Web3Provider): Promise<void> {
    this.buyChocolateContract = BuyMeAChocolateTypedFactory.connect(
      process.env.REACT_APP_BUYMEACHOCOLATE_ADDRESS || '',
      provider,
    )
  }

  public async buyToWithBNB({
    cryptoAmount,
    toAddress,
  }: {
    cryptoAmount: string
    toAddress: string
  }): Promise<void> {
    this.validate()
    await this.buyChocolateContract!.buyToWithBNB(toAddress, {
      value: ethers.utils.parseEther(cryptoAmount),
    })
  }

  public async getPrice(): Promise<string> {
    this.validate()
    const price = await this.buyChocolateContract!.getPrice()
    return ethers.utils.formatEther(price)
  }

  public async getFeePercent(): Promise<string> {
    this.validate()
    const fee = await this.buyChocolateContract!.getFeePercent()
    const formattedFeePercent = new BN(fee.toString()).div('100000000')
    return formattedFeePercent.toString()
  }
}

export default BuyMeAChocolateRepository
