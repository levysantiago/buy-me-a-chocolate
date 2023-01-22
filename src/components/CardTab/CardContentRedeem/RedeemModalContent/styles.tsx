import styled from "styled-components";
import { ITheme } from "../../../Theme";

interface IProps {
  theme: ITheme;
}

export const Container = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Topic = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.title2};
  font-size: 14px;
  color: ${props.theme.colors.brownLight};
  margin-top: 15px;
`
);

export const Attribute = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.text};
  font-size: 14px;
  color: ${props.theme.colors.brownLight};
`
);
