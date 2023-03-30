/* eslint-disable prettier/prettier */
import { createContext } from 'react'
import { IMetamaskContextProps } from './IMetamaskContextProps'

export const MetamaskContext = createContext<IMetamaskContextProps>({
  connect: () => {
    return new Promise(() => { })
  },
  isConnected: false,
  walletAddress: '',
  isNetworkWrong: false,
  chocTokenRepository: undefined,
  buyMeAChocolateRepository: undefined,
  cryptoRepository: undefined,
  chocBalance: '...',
  cryptoBalance: '...',
})
