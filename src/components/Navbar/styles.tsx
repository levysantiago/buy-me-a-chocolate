import styled from "styled-components";
import { ITheme } from "../Theme";

interface IProps {
  theme: ITheme;
}

interface ISideNavProps extends IProps {
  sideNavOpened: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 40px;
  background-color: transparent;
  display: flex;
  justify-content: right;
  flex-direction: row;
  align-items: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: center;
  }
`;

export const MenuItem = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ChocoLogo = styled.img.attrs({
  src: require("../../assets/logo.svg").default,
  attrs: "Token logo",
})`
  width: 20px;
`;

export const BSCLogo = styled.img.attrs({
  src: require("../../assets/bsc-logo.svg").default,
  attrs: "BSC logo",
})`
  width: 20px;
`;

export const NavMenu = styled.a.attrs({ href: "#" })`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 80px;
    height: 60px;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const MenuIcon = styled.img.attrs({
  src: require("../../assets/menu.svg").default,
  alt: "Menu icon",
})`
  width: 34px;
`;

export const ItemText = styled.span(
  (props: IProps) =>
    `
  font-family: "Roboto-Bold";
  color: ${props.theme.colors.brown};
  font-size: 12px;
  margin-left: 5px;
`
);

export const Sidenav = styled.div(
  (props: ISideNavProps) => `
  display: none;

  @media (max-width: 768px) {
    z-index: 1;
    height: 100%;
    display: flex;
    visibility: ${props.sideNavOpened ? "visible" : "hidden"};
    flex-direction: column;
    width: ${props.sideNavOpened ? "50%" : "0px"};
    transition: width 0.4s;
    background-color: ${props.theme.colors.brownDark};
    position: absolute;
    top: 0px;
    left: 0px;
  }
`
);

export const SidenavItem = styled.div(
  (props: IProps) => `
  display: flex;
  text-align: center;
  align-items: center;
  height: 60px;
  font-family: ${props.theme.fonts.title};
  justify-content: center;
  background-color: ${props.theme.colors.brownDark};
  color: ${props.theme.colors.brown};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  
  &:hover{
    color: ${props.theme.colors.brown};
    background-color: ${props.theme.colors.brown};
  }
`
);
