import React, { useState } from "react";
import Logo from "../../assets/mealful-logo.png";
import {
  NavContainer,
  HamburgerMenu,
  Menu,
  MenuLink,
  LogoContainer,
  AccountLink,
} from "./Appbar.styles";
import { VscAccount as AccountIcon } from "react-icons/vsc";
import { GiHamburgerMenu as HamMenu } from "react-icons/gi";

export default function Appbar() {
  const [listOpen, setListOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const setNavbarActive = () => {
      if(window.scrollY > 10){
        setNavbar(true)
      }
      else{
        setNavbar(false)
      }
  }

  window.addEventListener('scroll', setNavbarActive);

  return (
    <NavContainer navbar={navbar}>
      <LogoContainer src={Logo} />
      <HamburgerMenu onClick={() => setListOpen(!listOpen)}>
        <HamMenu />
      </HamburgerMenu>
      <Menu listOpen={listOpen}>
        <MenuLink
          href="#"
          style={{
            fontWeight: "500",
            color: "orange",
          }}
        >
          Buy Meal Plan
        </MenuLink>
        <MenuLink href="#">Schedule Meals</MenuLink>
        <MenuLink href="#">Upcoming</MenuLink>
        <AccountLink>
          <AccountIcon
            style={{
              fontSize: "50px",
            }}
          />
        </AccountLink>

        <MenuLink href="#">Hello, Sir</MenuLink>
      </Menu>
    </NavContainer>
  );
}
