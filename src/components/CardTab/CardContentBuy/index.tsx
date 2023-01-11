import React from "react";
import RoundChocoButton from "../../RoundChocoButton";
import { Container } from "./styles";
import { Title } from "./styles";

const CardContentBuy: React.FC = () => {
  return (
    <Container>
      <Title>Buy someone a chocolate</Title>
      <RoundChocoButton isSelected={false} />
    </Container>
  );
};

export default CardContentBuy;
