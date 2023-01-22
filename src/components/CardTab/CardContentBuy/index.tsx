import React from "react";
import DetailedInput from "../../Inputs/DetailedInput";
import RoundChocoButton from "../../RoundChocoButton";
import { ButtonContainer, Container, RoundButtonsContainer } from "./styles";
import { Title } from "./styles";
import ModalTrigger from "../../ModalTrigger";

const CardContentBuy: React.FC = () => {
  return (
    <Container>
      <Title>Buy someone a chocolate</Title>
      <RoundButtonsContainer>
        <RoundChocoButton text="1x" isSelected={true} />
        <RoundChocoButton text="3x" isSelected={false} />
        <RoundChocoButton text="5x" isSelected={false} />
        <RoundChocoButton text=">5x" isSelected={false} />
      </RoundButtonsContainer>

      <DetailedInput
        title="BUSD Amount"
        value={""}
        type={"number"}
        setValue={() => {}}
        identifier="BUSD"
        helperText="Available: 123"
      />

      <DetailedInput
        title="CHOC Amount"
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
        {/* <QuadButton text={"Continuar"} /> */}
        <ModalTrigger
          title="Continuar"
          modal={{ title: "Resumo de compra", content: <></> }}
        />
      </ButtonContainer>
    </Container>
  );
};

export default CardContentBuy;
