import React, { useState } from "react";

import {
  NavBarContainer,
  NavBarTitle,
  NavBarLinksContainer,
  NavBarLink,
  Separator,
  HamburgerBar,
  HamburgerMenu,
} from "./navbar.styles";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [hidden, toggleHidden] = useState(true);

  const onClick = () => {
    toggleHidden(!hidden);
  };

  return (
    <>
      <NavBarContainer>
        <NavBarTitle>Marcus' BarberShop</NavBarTitle>
        <HamburgerMenu onClick={onClick}>
          <HamburgerBar />
          <HamburgerBar />
          <HamburgerBar />
        </HamburgerMenu>
        <NavBarLinksContainer hidden={hidden}>
          <NavBarLink onClick={onClick}>
            <Link to="/">Home</Link>
          </NavBarLink>
          <NavBarLink onClick={onClick}>
            <Link to="/gallery">Gallery</Link>
          </NavBarLink>
          <NavBarLink onClick={onClick}>
            <Link to="/about">About Me</Link>
          </NavBarLink>
        </NavBarLinksContainer>
      </NavBarContainer>
      <Separator />
    </>
  );
};

export default NavBar;
