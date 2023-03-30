/* eslint-disable no-undef */
import React from 'react'
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
} from './styles'

interface IProps {
  id?: string
  title: string
  value: string
  type: 'number' | 'text'
  onChange: React.ChangeEventHandler<HTMLInputElement>
  identifier?: string
  helperText?: string
  disabled?: boolean
}

const DetailedInput: React.FC<IProps> = ({
  id,
  title,
  value,
  onChange,
  identifier,
  helperText,
  type,
  disabled = false,
}: IProps) => {
  return (
    <Container>
      {/* Title */}
      <Title>{title}</Title>

      {/* Input base */}
      <Base>
        <InsideBase borderRadiusCurved={!identifier} disabled={disabled}>
          <Input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        </InsideBase>

        {/* Identifier */}
        {identifier ? (
          <IdentifierContainer disabled={disabled}>
            <IdentifierText disabled={disabled}>{identifier}</IdentifierText>
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
  )
}

export default DetailedInput
