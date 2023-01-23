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
}

const ConnectButton: React.FC<IProps> = ({
  walletAddress,
  ...rest
}: IProps) => {
  return (
    <Container {...rest} type="button">
      {walletAddress ? (
        <>
          <ConnectButtonWalletIcon />
          <WalletAddressTitle>
            {abreviateWalletAddress(walletAddress)}
          </WalletAddressTitle>
        </>
      ) : (
        <Title>Connect Wallet</Title>
      )}
    </Container>
  );
};

export default ConnectButton;
