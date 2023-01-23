import styled from "styled-components";
import { ITheme } from "../../Theme";

interface IProps {
  theme: ITheme;
}

interface IBaseProps extends IProps {
  borderRadiusCurved: boolean | undefined;
  disabled: boolean | undefined;
}

interface IInputProps extends IProps {
  disabled: boolean | undefined;
}

interface IIdentifierProps extends IProps {
  disabled: boolean | undefined;
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
  ({ theme, disabled, borderRadiusCurved }: IBaseProps) => `
  height: 50px;
  width: 100%;
  background-color: transparent;
  border: 1px ${
    disabled ? theme.colors.brownLight2 : theme.colors.brownLight
  } solid;
  border-radius: ${borderRadiusCurved ? "14px" : "14px 0px 0px 14px"};
  padding: 0px 20px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`
);

export const Input = styled.input(
  ({ theme, disabled }: IInputProps) => `
  width: 100%;
  background-color: transparent;
  border: none;
  font-family: "Roboto-Regular";
  font-size: 14px;
  color: ${disabled ? theme.colors.brownLight2 : theme.colors.brownLight};
  outline: none;
  height: 20px;
`
);

export const IdentifierContainer = styled.div(
  ({ theme, disabled }: IIdentifierProps) => `
  width: 80px;
  height: 100%;
  background-color: ${
    disabled ? theme.colors.brownLight2 : theme.colors.brownLight
  };
  border: 1px ${
    disabled ? theme.colors.brownLight2 : theme.colors.brownLight
  } solid;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 14px 14px 0px;
`
);

export const IdentifierText = styled.span(
  ({ theme, disabled }: IIdentifierProps) => `
  font-family: "Roboto-Regular";
  font-size: 14px;
  color: ${disabled ? theme.colors.brownLight : theme.colors.brown};
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
