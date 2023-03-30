import styled from 'styled-components'
import { WalletIcon } from '../icons/styles'
import { ITheme } from '../Theme'

interface IProps {
  theme: ITheme
}

interface ITitleProps extends IProps {
  isNetworkWrong: boolean | undefined
}

export const Container = styled.button(
  ({ theme }: IProps) => `
  background-color: ${theme.colors.brownLight};
  border-radius: 100px;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  cursor: pointer;
  position: relative;
  border: 0px;
`,
)

export const Title = styled.span(
  ({ theme, isNetworkWrong }: ITitleProps) => `
  font-family: ${theme.fonts.title};
  color: ${isNetworkWrong ? theme.colors.wrong : theme.colors.black};
  font-size: 12px;
`,
)

export const WalletAddressTitle = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.title};
  color: ${props.theme.colors.black};
  font-size: 12px;
  margin-left: 10px;
`,
)

export const ConnectButtonWalletIcon = styled(WalletIcon)`
  width: 25px;
  position: absolute;
  top: 0px;
  left: 0px;
`
