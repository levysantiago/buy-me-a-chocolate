import { ethers } from 'ethers'

export interface IBuyMeAChoclateRepository {
  init(provider: ethers.providers.Web3Provider): void
  getFeePercent(): Promise<string>
  getPrice(): Promise<string>
  buyToWithBNB: ({
    cryptoAmount,
    toAddress,
  }: {
    cryptoAmount: string
    toAddress: string
  }) => void
}
