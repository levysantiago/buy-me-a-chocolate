import styled from 'styled-components'
import { ITheme } from '../../Theme'

interface IProps {
  theme: ITheme
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  padding: 10px 100px;

  @media (max-width: 768px) {
    padding: 10px 50px;
  }

  @media (max-width: 600px) {
    padding: 10px 0px;
  }
`

export const Title = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.title};
  font-size: 20px;
  color: ${props.theme.colors.orange};
`,
)

export const RoundButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0px;
`

export const ButtonContainer = styled.div`
  width: 200px;
  margin-top: 20px;
`
