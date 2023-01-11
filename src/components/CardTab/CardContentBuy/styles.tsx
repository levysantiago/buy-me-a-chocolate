import styled from "styled-components";
import { ITheme } from "../../Theme";

interface IProps {
  theme: ITheme;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px 0px;
`;

export const Title = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.title};
  font-size: 20px;
  color: ${props.theme.colors.orange};
`
);
