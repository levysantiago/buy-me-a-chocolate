import React from "react";
import RoundChocoButton from "../../RoundChocoButton";
import { Container, RoundButtonsContainer } from "./styles";
import { Title } from "./styles";

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
    </Container>
  );
};

export default CardContentBuy;
