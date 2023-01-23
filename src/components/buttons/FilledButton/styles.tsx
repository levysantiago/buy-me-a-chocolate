import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { ITheme } from "../../Theme";

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
    background-color: ${(props) => props.theme.colors.brownLight};
    border-radius: 10px;
    cursor: pointer;
    border: 0px;
  }
`;

export const DialogTrigger = styled(Dialog.Trigger)`
  background-color: transparent;
  width: 100%;
  border: 0;
`;

export const DialogClose = styled(Dialog.Close)`
  background-color: transparent;
  width: 100%;
  border: 0px;
  cursor: pointer;
`;

export const Text = styled.span(
  (props: IProps) => `
  font-family: "Roboto-Medium";
  font-size: 12px;
  color: ${props.theme.colors.brown};
`
);
