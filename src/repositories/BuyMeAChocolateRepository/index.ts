import { Web3Provider } from '@ethersproject/providers'
import { ethers } from 'ethers'
import { BuyMeAChocolateABI as IBuyMeAChocolateABI } from '../../smc-types'
import { BuyMeAChocolateABI__factory as BuyMeAChocolateTypedFactory } from '../../smc-types/factories'
import { BigNumber as BN } from 'bignumber.js'
import { IBuyMeAChoclateRepository } from './IBuyMeAChocolateRepository'

class BuyMeAChocolateRepository implements IBuyMeAChoclateRepository {
  private provider: Web3Provider | undefined
  private buyChocolateContract: IBuyMeAChocolateABI | undefined

  constructor(provider: Web3Provider) {
    if (provider) {
      this.provider = provider
      this.init(provider)
    }
  }

  private validate() {
    if (!this.buyChocolateContract) {
      throw new Error('Buy Chocolate Contract not defined')
    }
    if (!this.provider) {
      throw new Error('Provider not defined')
    }
  }

  async init(provider: Web3Provider): Promise<void> {
    this.provider = provider
    this.buyChocolateContract = BuyMeAChocolateTypedFactory.connect(
      process.env.REACT_APP_BUYMEACHOCOLATE_ADDRESS || '',
      provider,
    )
  }

  public getAddress(): string {
    this.validate()
    return this.buyChocolateContract!.address
  }

  public async buyToWithBNB({
    cryptoAmount,
    toAddress,
  }: {
    cryptoAmount: string
    toAddress: string
  }): Promise<void> {
    this.validate()

    const signer = this.provider!.getSigner()
    const unsignedTrx =
      await this.buyChocolateContract!.populateTransaction.buyToWithBNB(
        toAddress,
        {
          value: ethers.utils.parseEther(cryptoAmount),
        },
      )
    await signer.sendTransaction(unsignedTrx)
  }

  public async withdraw({ chocAmount }: { chocAmount: string }) {
    this.validate()
    const signer = this.provider!.getSigner()
    const unsignedTrx =
      await this.buyChocolateContract!.populateTransaction.withdraw(
        ethers.utils.parseEther(chocAmount),
      )
    await signer.sendTransaction(unsignedTrx)
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
