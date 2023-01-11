import styled from "styled-components";
import RoundChocoButton from "../../RoundChocoButton";
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

export const RoundButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0px;
`;

export const ButtonContainer = styled.div`
  width: 200px;
  margin-top: 40px;
`;
