import styled from "styled-components";
import { ITheme } from "../../Theme";
import * as Dialog from "@radix-ui/react-dialog";

interface IProps {
  theme: ITheme;
}

export const BaseContainer = styled.div`
  width: 100%;
  .base {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 10px;
    cursor: pointer;
    border: 0px;
  }
`;

export const Text = styled.span(
  (props: IProps) => `
  font-family: "Roboto-Medium";
  font-size: 12px;
  color: ${props.theme.colors.orange};
`
);

export const DialogClose = styled(Dialog.Close)`
  background-color: transparent;
  width: 100%;
  border: 0px;
  cursor: pointer;
`;
