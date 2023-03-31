/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { ITheme } from '../../Theme'

interface IProps {
  theme: ITheme
}

interface IBaseContainerProps extends IProps {
  disabled: boolean | undefined
}

export const Text = styled.span`
  font-family: "Roboto-Medium";
  font-size: 12px;
`

export const DialogTrigger = styled(Dialog.Trigger)`
    background-color: transparent;
    width: 100%;
    border: 0;
  `

export const DialogClose = styled(Dialog.Close)`
    background-color: transparent;
    width: 100%;
    border: 0px;
  `

export const BaseContainer = styled.div(
  (props: IBaseContainerProps) => `
  width: 100%;
  .base {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props.disabled
      ? props.theme.colors.brownLight2
      : props.theme.colors.brownLight
    };
    border-radius: 10px;
    border: 0px;
    cursor: ${props.disabled ? 'default' : 'pointer'};
  }

  ${Text}{
    color: ${props.disabled ? props.theme.colors.brownLight : props.theme.colors.brown};
  }

`,
)


