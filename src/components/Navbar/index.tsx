import { BigNumber, ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import ConnectButton from "../ConnectButton";
import { IMetamaskContextProps } from "../context/IMetamaskContextProps";
import { MetamaskContext } from "../context/MetamaskContext";
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
  const [chocTokenBalance, setChocTokenBalance] = useState("...");

  const {
    provider,
    connect,
    walletAddress,
    isNetworkWrong,
    chocTokenRepository,
  } = useContext<IMetamaskContextProps>(MetamaskContext);

  async function handleConnect() {
    if (!provider) {
      window.open("https://metamask.io", "_blank", "noopener noreferrer");
    } else {
      await connect();
    }
  }

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

  useEffect(() => {
    if (walletAddress && chocTokenRepository) {
      chocTokenRepository
        .balanceOf(walletAddress)
        .then((balance: BigNumber) => {
          const _chocBalance = Number(
            ethers.utils.formatEther(balance)
          ).toFixed(3);
          setChocTokenBalance(_chocBalance);
        });
    }
  }, [provider, chocTokenRepository, setChocTokenBalance, walletAddress]);

  return (
    <Container>
      {/* BIG DEVICES */}
      <MenuItem>
        <ChocoLogo />
        <ItemText>{chocTokenBalance}</ItemText>
      </MenuItem>

      <MenuItem>
        <BSCLogo />
        <ItemText>BSC</ItemText>
      </MenuItem>

      <MenuItem>
        <ConnectButton
          onClick={handleConnect}
          walletAddress={walletAddress}
          isNetworkWrong={isNetworkWrong}
        />
      </MenuItem>

      {/* SMALL DEVICES */}
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
          <ItemText>{chocTokenBalance}</ItemText>
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
