import styled from "styled-components";
import { ITheme } from "../Theme";

interface IProps {
  theme: ITheme;
}

export const Base = styled.div(
  (props: IProps) => `
  height: 40px;
  width: 130px;
  border-radius: 100px;
  background-color: transparent;
  border: 1px ${props.theme.colors.brownLight} solid;
  display: flex;
  justify-content: center;
  align-items: center;
`
);

export const Text = styled.span(
  (props: IProps) => `
  font-family: "Roboto-Regular";
  font-size: 14px;
  color: ${props.theme.colors.brownLight};
`
);
