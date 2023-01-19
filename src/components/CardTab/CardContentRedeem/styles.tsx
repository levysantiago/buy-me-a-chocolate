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
  padding: 10px 100px;
`;

export const Title = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.title};
  font-size: 20px;
  color: ${props.theme.colors.orange};
`
);

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

export const BalanceTitle = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.title};
  font-size: 16px;
  color: ${props.theme.colors.brownLight};
`
);

export const LogoDarkIcon = styled.img.attrs({
  src: require("../../../assets/logo-dark.svg").default,
  alt: "Logo",
})`
  margin-right: 10px;
`;
