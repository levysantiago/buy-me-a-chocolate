import styled from 'styled-components'
import { ITheme } from '../Theme'

interface IProps {
  theme: ITheme
}

interface ITabSelectorProps extends IProps {
  isVisible: boolean
}

export const Container = styled.div(
  (props: IProps) => `
  background-color: ${props.theme.colors.brownMedium};
  width: 500px;
  height: 580px;
  border-radius: 40px;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    padding: 30px 20px;
  }
`,
)

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const TabTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  width: 55px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const TabSelector = styled.div(
  (props: ITabSelectorProps) => `
  width: 100%;
  height: 2px;
  background-color: ${props.theme.colors.orange};
  visibility: ${props.isVisible ? 'visible' : 'hidden'};
`,
)

export const TabTitle = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.title};
  font-size: 12px;
  color: ${props.theme.colors.white};
  margin-bottom: 3px;
`,
)
