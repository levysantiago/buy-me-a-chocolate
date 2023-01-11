import React from "react";
import { Base, Text } from "./styles";

interface IProps {
  text: string;
  onClick?: () => void;
}

const QuadButton: React.FC<IProps> = (props: IProps) => {
  const { onClick, text } = props;

  return (
    <Base onClick={onClick}>
      <Text>{text}</Text>
    </Base>
  );
};

export default QuadButton;
