import styled from "styled-components";
import { ITheme } from "../Theme";

interface IProps {
  theme: ITheme;
}

interface IBaseProps extends IProps {
  isSelected: boolean | undefined;
}

export const Base = styled.div(
  (props: IBaseProps) => `
  background-color: ${
    props.isSelected ? props.theme.colors.brown : props.theme.colors.brownLight
  };
  width: 50px;
  height: 50px;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`
);

export const Text = styled.span(
  (props: IBaseProps) => `
  font-family: "Roboto-Bold";
  font-size: 14px;
  color: ${
    props.isSelected ? props.theme.colors.brownLight : props.theme.colors.brown
  };
  line-height: 0px;
`
);

export const ChocoIcon = styled.img.attrs({
  src: require("../../assets/choco.svg").default,
  alt: "Choco token icon",
})`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: -5px;
  right: -3px;
`;
