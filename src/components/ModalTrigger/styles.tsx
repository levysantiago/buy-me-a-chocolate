import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import { ITheme } from '../Theme'

interface IProps {
  theme: ITheme
}

export const Overlay = styled.div`
  background-color: rgb(0, 0, 0, 0.8);
  position: fixed;
  inset: 0px;
`

export const DialogClose = styled(Dialog.Close)`
  background-color: transparent;
  width: 100%;
  border: 0px;
  cursor: pointer;
`

export const CloseIconContainer = styled.div`
  position: absolute;
  right: 35px;
  top: 20px;
`

export const CloseIcon = styled.img.attrs({
  src: require('../../assets/x.svg').default,
  alt: 'Close icon.',
})`
  width: 15px;
`

export const DialogContent = styled(Dialog.Content)(
  (props: IProps) => `
  position: absolute;
  background-color: ${props.theme.colors.brownMedium};
  top: 50%;
  left: 50%;
  width: 400px;
  height: auto;
  padding: 20px 37px;
  border-radius: 40px;
  transform: translateX(-50%) translateY(-50%);
`,
)

export const DialogTitle = styled(Dialog.Title)(
  (props: IProps) => `
  font-family: "Roboto-Bold";
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
  color: ${props.theme.colors.orange};
`,
)

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 10px;
`
