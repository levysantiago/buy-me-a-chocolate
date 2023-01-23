import React from "react";
import DetailedInput from "../../Inputs/DetailedInput";
import { ButtonContainer } from "../CardContentBuy/styles";
import {
  BalanceContainer,
  BalanceTitle,
  Container,
  LogoDarkIcon,
  Title,
} from "./styles";
import ModalTrigger from "../../ModalTrigger";
import RedeemModalContent from "./RedeemModalContent";

const CardContentRedeem: React.FC = () => {
  return (
    <Container>
      <Title>Redeem reward</Title>

      <BalanceContainer>
        <LogoDarkIcon />
        <BalanceTitle>3.123</BalanceTitle>
      </BalanceContainer>

      <DetailedInput
        title="CHOC Amount"
        value={""}
        type={"number"}
        setValue={() => {}}
        identifier="CHOC"
        helperText="Available: 123"
      />

      <DetailedInput
        title="BUSD Amount"
        value={""}
        type={"number"}
        setValue={() => {}}
        identifier="BUSD"
      />

      <DetailedInput
        title="Wallet address"
        value={""}
        type={"text"}
        setValue={() => {}}
      />

      <ButtonContainer>
        <ModalTrigger
          title="Continuar"
          modal={{
            title: "Redeem resume",
            content: RedeemModalContent({
              totalToBurn: "asd",
              totalToReceive: "asd",
            }),
          }}
        />
      </ButtonContainer>
    </Container>
  );
};

export default CardContentRedeem;
