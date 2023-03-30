import styled from 'styled-components'
import { ChocoLogo } from '../../components/icons/styles'
import { ITheme } from '../../components/Theme'

interface IProps {
  theme: ITheme
}

export const Container = styled.div`
  padding: 0px 50px;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const HomeChocoLogo = styled(ChocoLogo)`
  width: 40px;

  @media (max-width: 768px) {
    width: 35px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: 50px;
`

export const Title = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.title};
  font-size: 30px;
  color: ${props.theme.colors.orange};
  margin-left: 20px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`,
)

export const VersionBadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 30px;
`
