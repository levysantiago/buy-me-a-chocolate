import React, { useContext, useEffect, useState } from 'react'
import ConnectButton from '../ConnectButton'
import { IMetamaskContextProps } from '../context/IMetamaskContextProps'
import { MetamaskContext } from '../context/MetamaskContext'
import { BSCLogo, ChocoLogo } from '../icons/styles'
import {
  Container,
  ItemText,
  MenuIcon,
  MenuItem,
  NavMenu,
  Sidenav,
  SidenavItem,
} from './styles'
import fixNumber from '../../helpers/fixNumber'

const Navbar: React.FC = () => {
  const [sideNavOpened, setSideNavOpened] = useState(false)

  const { connect, walletAddress, isNetworkWrong, chocPriceInBNB } =
    useContext<IMetamaskContextProps>(MetamaskContext)

  async function handleConnect() {
    if (!window.ethereum && !walletAddress) {
      window.open('https://metamask.io', '_blank', 'noopener noreferrer')
    } else {
      await connect()
    }
  }

  useEffect(() => {
    function handleClickOutside(event: Event) {
      const children = Array.prototype.slice.call(ref?.children)
      if (event.target !== ref && !children.includes(event.target)) {
        setSideNavOpened(false)
      }
    }

    const ref = document.getElementById('sidenav')
    if (ref) {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [])

  return (
    <Container>
      {/* BIG DEVICES */}
      <MenuItem>
        <ChocoLogo />
        <ItemText>
          {chocPriceInBNB !== '...'
            ? ` = ${fixNumber(chocPriceInBNB, { fixed: 3 })} BNB`
            : '...'}
        </ItemText>
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
          setSideNavOpened(!sideNavOpened)
        }}
      >
        <MenuIcon />
      </NavMenu>

      <Sidenav id="sidenav" {...{ sideNavOpened }}>
        <SidenavItem>
          <ChocoLogo />
          <ItemText>
            {chocPriceInBNB !== '...'
              ? ` = ${fixNumber(chocPriceInBNB, { fixed: 3 })} BNB`
              : '...'}
          </ItemText>
        </SidenavItem>

        <SidenavItem>
          <BSCLogo />
          <ItemText>BSC</ItemText>
        </SidenavItem>
      </Sidenav>
    </Container>
  )
}

export default Navbar
