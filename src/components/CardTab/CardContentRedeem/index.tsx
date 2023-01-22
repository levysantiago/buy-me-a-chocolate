import React from "react";
import DetailedInput from "../../Inputs/DetailedInput";
import FilledButton from "../../buttons/FilledButton";
import { ButtonContainer } from "../CardContentBuy/styles";
import {
  BalanceContainer,
  BalanceTitle,
  Container,
  LogoDarkIcon,
  Title,
} from "./styles";

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
        identifier="BUSD"
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
        <FilledButton text={"Continuar"} />
      </ButtonContainer>
    </Container>
  );
};

export default CardContentRedeem;
