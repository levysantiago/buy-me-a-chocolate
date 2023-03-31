import React from 'react'
import { BaseContainer, DialogClose, DialogTrigger, Text } from './styles'

interface IProps {
  text: string
  onClick?: () => void
  isModalTrigger?: boolean
  isModalClose?: boolean
}

const FilledButton: React.FC<IProps> = ({
  onClick,
  text,
  isModalTrigger = false,
  isModalClose = false,
}: IProps) => {
  if (isModalTrigger) {
    return (
      <BaseContainer onClick={onClick}>
        <DialogTrigger type="button" className="base">
          <Text>{text}</Text>
        </DialogTrigger>
      </BaseContainer>
    )
  } else if (isModalClose) {
    return (
      <BaseContainer onClick={onClick}>
        <DialogClose type="button" className="base">
          <Text>{text}</Text>
        </DialogClose>
      </BaseContainer>
    )
  } else {
    return (
      <BaseContainer>
        <button onClick={onClick} className="base">
          <Text>{text}</Text>
        </button>
      </BaseContainer>
    )
  }
}

export default FilledButton
