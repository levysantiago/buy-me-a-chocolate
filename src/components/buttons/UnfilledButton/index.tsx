import React from "react";
import { BaseContainer, DialogClose, Text } from "./styles";

interface IProps {
  text: string;
  onClick?: () => void;
  isModalClose?: boolean;
}

const UnfilledButton: React.FC<IProps> = ({
  onClick,
  text,
  isModalClose = false,
}: IProps) => {
  if (isModalClose) {
    return (
      <BaseContainer>
        <DialogClose type="button" className="base">
          <Text>{text}</Text>
        </DialogClose>
      </BaseContainer>
    );
  } else {
    return (
      <BaseContainer onClick={onClick}>
        <button type="button" className="base">
          <Text>{text}</Text>
        </button>
      </BaseContainer>
    );
  }
};

export default UnfilledButton;
