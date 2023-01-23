import React, { ButtonHTMLAttributes } from "react";
import abreviateWalletAddress from "../../helpers/abreviateWalletAddress";
import {
  ConnectButtonWalletIcon,
  Container,
  Title,
  WalletAddressTitle,
} from "./styles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  walletAddress?: string;
  isNetworkWrong?: boolean;
}

const ConnectButton: React.FC<IProps> = ({
  walletAddress,
  isNetworkWrong,
  ...rest
}: IProps) => {
  return (
    <Container {...rest} type="button">
      {walletAddress && !isNetworkWrong ? (
        <>
          <ConnectButtonWalletIcon />
          <WalletAddressTitle>
            {abreviateWalletAddress(walletAddress)}
          </WalletAddressTitle>
        </>
      ) : (
        <Title isNetworkWrong={isNetworkWrong}>
          {isNetworkWrong ? "Wrong Network" : "Connect Wallet"}
        </Title>
      )}
    </Container>
  );
};

export default ConnectButton;
