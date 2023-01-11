import React from "react";
import { Base, ChocoIcon, Text } from "./styles";

interface IProps {
  text: string;
  isSelected?: boolean;
}

const RoundChocoButton: React.FC<IProps> = (props: IProps) => {
  const { text, isSelected } = props;

  return (
    <Base isSelected={isSelected}>
      <Text isSelected={isSelected}>{text}</Text>
      <ChocoIcon />
    </Base>
  );
};

export default RoundChocoButton;
