import { ethers } from 'ethers'

export interface IBuyMeAChoclateRepository {
  init(provider: ethers.providers.Web3Provider): void
  getFeePercent(): Promise<string>
  getPrice(): Promise<string>
  getAddress(): string
  withdraw({ chocAmount }: { chocAmount: string }): Promise<void>
  buyToWithBNB: ({
    cryptoAmount,
    toAddress,
  }: {
    cryptoAmount: string
    toAddress: string
  }) => Promise<void>
}
