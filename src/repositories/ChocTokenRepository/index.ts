import { ethers } from 'ethers'
import { IChocTokenRepository } from './IChocTokenRepository'
import { ERC20ABI__factory as ERC20ABITypedFactory } from '../../smc-types/factories'
import { ERC20ABI as IERC20ABI } from '../../smc-types'
import { TransactionResponse, Web3Provider } from '@ethersproject/providers'

class ChocTokenRepository implements IChocTokenRepository {
  private chocToken: IERC20ABI | undefined
  private provider: Web3Provider | undefined

  constructor(provider?: ethers.providers.Web3Provider) {
    if (provider) {
      this.provider = provider
      this.init(provider)
    }
  }

  public init(provider: ethers.providers.Web3Provider): void {
    this.provider = provider
    this.chocToken = ERC20ABITypedFactory.connect(
      process.env.REACT_APP_CHOC_TOKEN_ADDRESS || '',
      provider,
    )
  }

  public async balanceOf(address: string): Promise<string> {
    if (!this.chocToken) throw new Error('ChocToken not defined')
    const balance = await this.chocToken.balanceOf(address)
    return ethers.utils.formatEther(balance)
  }

  public async totalSupply(): Promise<string> {
    if (!this.chocToken) throw new Error('ChocToken not defined')
    const _totalSupply = await this.chocToken.totalSupply()
    return ethers.utils.formatEther(_totalSupply)
  }

  public async allowance({
    from,
    to,
  }: {
    from: string
    to: string
  }): Promise<string> {
    if (!this.chocToken) throw new Error('ChocToken not defined')
    const allowance = await this.chocToken.allowance(from, to)
    return ethers.utils.formatEther(allowance)
  }

  public async approve({
    address,
    amount,
  }: {
    address: string
    amount: string
  }): Promise<TransactionResponse> {
    if (!this.chocToken) throw new Error('ChocToken not defined')
    const signer = this.provider!.getSigner()
    const unsignedTrx = await this.chocToken.populateTransaction.approve(
      address,
      ethers.utils.parseEther(amount),
    )
    return await signer.sendTransaction(unsignedTrx)
  }
}

export default ChocTokenRepository
