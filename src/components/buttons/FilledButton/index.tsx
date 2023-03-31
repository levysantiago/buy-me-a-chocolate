import React from 'react'
import { BaseContainer, DialogClose, DialogTrigger, Text } from './styles'

interface IProps {
  text: string
  onClick?: () => void
  isModalTrigger?: boolean
  isModalClose?: boolean
  disabled?: boolean
}

const FilledButton: React.FC<IProps> = ({
  onClick,
  text,
  isModalTrigger = false,
  isModalClose = false,
  disabled,
}: IProps) => {
  if (isModalTrigger) {
    return (
      <BaseContainer onClick={onClick} disabled={disabled}>
        <DialogTrigger type="button" className="base">
          <Text>{text}</Text>
        </DialogTrigger>
      </BaseContainer>
    )
  } else if (isModalClose) {
    return (
      <BaseContainer onClick={onClick} disabled={disabled}>
        <DialogClose type="button" className="base">
          <Text>{text}</Text>
        </DialogClose>
      </BaseContainer>
    )
  } else {
    return (
      <BaseContainer disabled={disabled}>
        <button onClick={onClick} className="base" disabled={disabled}>
          <Text>{text}</Text>
        </button>
      </BaseContainer>
    )
  }
}

export default FilledButton
