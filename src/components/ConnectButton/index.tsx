import React from "react";
import abreviateWalletAddress from "../../helpers/abreviateWalletAddress";
import {
  ConnectButtonWalletIcon,
  Container,
  Title,
  WalletAddressTitle,
} from "./styles";

interface IProps {
  walletAddress?: string;
}

const ConnectButton: React.FC<IProps> = (props: IProps) => {
  return (
    <Container>
      {props.walletAddress ? (
        <>
          <ConnectButtonWalletIcon />
          <WalletAddressTitle>
            {abreviateWalletAddress(props.walletAddress)}
          </WalletAddressTitle>
        </>
      ) : (
        <Title>Connect Wallet</Title>
      )}
    </Container>
  );
};

export default ConnectButton;
