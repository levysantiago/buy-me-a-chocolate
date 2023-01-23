import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { MetamaskContext } from "./MetamaskContext";

export const MetamaskProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [provider, setProvider] = useState<
    ethers.providers.Web3Provider | undefined
  >();
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isNetworkWrong, setIsNetworkWrong] = useState(false);

  async function connect(): Promise<string[] | undefined> {
    if (window.ethereum) {
      const accounts = (await window.ethereum.request({
        method: "eth_requestAccounts",
      })) as string[] | undefined;

      if (accounts && accounts.length) {
        setWalletAddress(accounts[0]);
        setIsConnected(true);
      }

      return accounts;
    }
  }

  function verifyNetwork(selectedChainId: string) {
    if (selectedChainId !== process.env.REACT_APP_CHAIN_ID) {
      setIsNetworkWrong(true);
    } else {
      setIsNetworkWrong(false);
    }
  }

  function getProvider() {
    if (window.ethereum !== undefined) {
      const windowEthereum: any = window.ethereum;
      // Get the provider and signer from the browser window
      const provider = new ethers.providers.Web3Provider(windowEthereum);

      setProvider(provider);

      return provider;
    }
  }

  useEffect(() => {
    if (provider && provider.network) {
      const chainId = `0x${provider.network.chainId.toString(16)}`;
      verifyNetwork(chainId);
    }
  }, [provider, walletAddress]);

  useEffect(() => {
    getProvider();

    // On accounts changed
    window.ethereum?.on("accountsChanged", (accounts: any) => {
      const _accounts: string[] = accounts;

      if (_accounts.length) {
        setWalletAddress(_accounts[0]);
      } else {
        setWalletAddress("");
        setIsConnected(false);
      }
    });

    // On network change
    window.ethereum?.on("chainChanged", (_chainId) => {
      verifyNetwork(_chainId as string);
      // window.location.reload();
    });
  }, []);

  return (
    <MetamaskContext.Provider
      value={{
        provider,
        setProvider,
        connect,
        isConnected,
        walletAddress,
        isNetworkWrong,
      }}
    >
      {children}
    </MetamaskContext.Provider>
  );
};
