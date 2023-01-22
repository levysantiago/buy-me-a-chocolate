import styled from "styled-components";
import { ITheme } from "../../Theme";

interface IProps {
  theme: ITheme;
}

export const Base = styled.button.attrs({ type: "button" })(
  (props: IProps) => `
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  border: 0px;
`
);

export const Text = styled.span(
  (props: IProps) => `
  font-family: "Roboto-Medium";
  font-size: 12px;
  color: ${props.theme.colors.orange};
`
);
