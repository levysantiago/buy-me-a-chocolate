import { TransactionResponse } from '@ethersproject/providers'
import { ethers } from 'ethers'

export interface IChocTokenRepository {
  init(provider: ethers.providers.Web3Provider): void
  balanceOf(address: string): Promise<string>
  allowance({ from, to }: { from: string; to: string }): Promise<string>
  totalSupply(): Promise<string>
  approve({
    address,
    amount,
  }: {
    address: string
    amount: string
  }): Promise<TransactionResponse>
}
