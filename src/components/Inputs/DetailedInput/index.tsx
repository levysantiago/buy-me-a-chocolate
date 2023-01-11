import React from "react";
import {
  Base,
  Container,
  HelperText,
  HelperTextContainer,
  IdentifierContainer,
  IdentifierText,
  Input,
  InsideBase,
  Title,
} from "./styles";

interface IProps {
  id?: string;
  title: string;
  value: string;
  type: "number" | "text";
  setValue: (newValue: string) => void;
  identifier?: string;
  helperText?: string;
}

const DetailedInput: React.FC<IProps> = (props: IProps) => {
  const { id, title, value, setValue, identifier, helperText, type } = props;

  return (
    <Container>
      {/* Title */}
      <Title>{title}</Title>

      {/* Input base */}
      <Base>
        <InsideBase borderRadiusCurved={!identifier}>
          <Input
            id={id}
            type={type}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </InsideBase>

        {/* Identifier */}
        {identifier ? (
          <IdentifierContainer>
            <IdentifierText>{identifier}</IdentifierText>
          </IdentifierContainer>
        ) : null}
      </Base>

      {/* Helper text */}
      {helperText ? (
        <HelperTextContainer>
          <HelperText>{helperText}</HelperText>
        </HelperTextContainer>
      ) : null}
    </Container>
  );
};

export default DetailedInput;
