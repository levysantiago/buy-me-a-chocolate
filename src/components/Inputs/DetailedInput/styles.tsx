import styled from "styled-components";
import { ITheme } from "../../Theme";

interface IProps {
  theme: ITheme;
}

interface IBaseProps extends IProps {
  borderRadiusCurved: boolean | undefined;
}

export const Container = styled.div`
  text-align: left;
  width: 100%;
  margin: 10px;
`;

export const Title = styled.span(
  (props: IProps) => `
  font-family: "Roboto-Regular";
  font-size: 12px;
  color: ${props.theme.colors.brownLight};
`
);

export const Base = styled.div(
  (props: IProps) => `
  height: 50px;
  padding: 1px 0px;
  background-color: transparent;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`
);

export const InsideBase = styled.div(
  (props: IBaseProps) => `
  height: 50px;
  width: 100%;
  background-color: transparent;
  border: 1px ${props.theme.colors.brownLight} solid;
  border-radius: ${props.borderRadiusCurved ? "14px" : "14px 0px 0px 14px"};
  padding: 0px 20px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`
);

export const Input = styled.input(
  (props: IProps) => `
  width: 100%;
  background-color: transparent;
  border: none;
  font-family: "Roboto-Regular";
  font-size: 14px;
  color: ${props.theme.colors.brownLight};
  outline: none;
  height: 20px;
`
);

export const IdentifierContainer = styled.div(
  (props: IProps) => `
  width: 80px;
  height: 100%;
  background-color: ${props.theme.colors.brownLight};
  border: 1px ${props.theme.colors.brownLight} solid;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 14px 14px 0px;
`
);

export const IdentifierText = styled.span(
  (props: IProps) => `
  font-family: "Roboto-Regular";
  font-size: 14px;
  color: ${props.theme.colors.brown};
`
);

export const HelperTextContainer = styled.div`
  text-align: right;
  width: 100%;
`;

export const HelperText = styled.span(
  (props: IProps) => `
  font-family: "Roboto-Regular";
  font-size: 10px;
  color: ${props.theme.colors.brownLight2};
`
);
