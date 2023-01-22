import React, { ButtonHTMLAttributes } from "react";
import { Base, ChocoIcon, Text } from "./styles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isSelected?: boolean;
}

const RoundChocoButton: React.FC<IProps> = ({
  text,
  isSelected,
  ...rest
}: IProps) => {
  return (
    <Base isSelected={isSelected} {...rest}>
      <Text isSelected={isSelected}>{text}</Text>
      <ChocoIcon />
    </Base>
  );
};

export default RoundChocoButton;
