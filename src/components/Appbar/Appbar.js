import React, { useState } from "react";
import Logo from "../../assets/mealful-logo.png";
import { NavContainer, HamburgerMenu, Menu, MenuLink, LogoContainer, AccountLink} from "./Appbar.styles"
import {VscAccount as AccountIcon} from 'react-icons/vsc'
import { GiHamburgerMenu as HamMenu} from 'react-icons/gi'

export default function Appbar() {
  const [listOpen , setListOpen] = useState(false)

  return (
      <NavContainer>
          <LogoContainer src={Logo}/>
        <HamburgerMenu onClick= {()=> setListOpen(!listOpen)}>
          <HamMenu/>
        </HamburgerMenu>
        <Menu listOpen={listOpen}>
          <MenuLink href="#" style={{
            fontWeight: '500',
            color: "orange"
          }}>Buy Meal Plan</MenuLink>
          <MenuLink href="#">Schedule Meals</MenuLink>
          <MenuLink href="#">Upcoming</MenuLink>
          <AccountLink>
          <AccountIcon style={{
            fontSize:'50px'
          }}/>
          <MenuLink href="#">Hello, Sir</MenuLink>
          </AccountLink>
        </Menu>
      </NavContainer>
  );
}
