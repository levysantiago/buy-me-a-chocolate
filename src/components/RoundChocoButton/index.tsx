import React from "react";
import { Base, ChocoIcon, Text } from "./styles";

interface IProps {
  isSelected?: boolean;
}

const RoundChocoButton: React.FC<IProps> = (props: IProps) => {
  const { isSelected } = props;

  return (
    <Base isSelected={isSelected}>
      <Text isSelected={isSelected}>1x</Text>
      <ChocoIcon />
    </Base>
  );
};

export default RoundChocoButton;
