import React, { useEffect, useState } from "react";
import { BSCLogo, ChocoLogo } from "../icons/styles";
import {
  Container,
  ItemText,
  MenuIcon,
  MenuItem,
  NavMenu,
  Sidenav,
  SidenavItem,
} from "./styles";

const Navbar: React.FC = () => {
  const [sideNavOpened, setSideNavOpened] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      const children = Array.prototype.slice.call(ref?.children);
      if (event.target !== ref && !children.includes(event.target)) {
        setSideNavOpened(false);
      }
    }

    const ref = document.getElementById("sidenav");
    if (ref) {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, []);

  return (
    <Container>
      <MenuItem>
        <ChocoLogo />
        <ItemText>3.213</ItemText>
      </MenuItem>

      <MenuItem>
        <BSCLogo />
        <ItemText>BSC</ItemText>
      </MenuItem>

      <NavMenu
        onClick={() => {
          setSideNavOpened(!sideNavOpened);
        }}
      >
        <MenuIcon />
      </NavMenu>

      <Sidenav id="sidenav" {...{ sideNavOpened }}>
        <SidenavItem>
          <ChocoLogo />
          <ItemText>3.213</ItemText>
        </SidenavItem>

        <SidenavItem>
          <BSCLogo />
          <ItemText>BSC</ItemText>
        </SidenavItem>
      </Sidenav>
    </Container>
  );
};

export default Navbar;
