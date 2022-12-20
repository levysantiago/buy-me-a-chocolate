import styled from "styled-components";
import { ITheme } from "../Theme";

interface IProps {
  theme: ITheme;
}

export const Container = styled.div(
  (props: IProps) => `
  background-color: ${props.theme.colors.brownMedium};
  width: 500px;
  height: 600px;
  border-radius: 40px;
  padding: 30px 40px;
`
);

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TabTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  width: 55px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TabSelector = styled.div(
  (props: IProps) => `
  width: 100%;
  height: 2px;
  background-color: ${props.theme.colors.orange};
`
);

export const TabTitle = styled.span(
  (props: IProps) => `
  font-family: ${props.theme.fonts.title};
  font-size: 12px;
  color: ${props.theme.colors.white};
  margin-bottom: 3px;
`
);
