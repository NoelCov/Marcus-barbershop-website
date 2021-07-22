import React from "react";

import {
  NavBarContainer,
  NavBarTitle,
  NavBarLinksContainer,
  NavBarLink,
  Separator,
} from "./navbar.styles";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <NavBarTitle>Marcus' BarberShop</NavBarTitle>
        <NavBarLinksContainer>
          <NavBarLink>
            <Link to="/">Home</Link>
          </NavBarLink>
          <NavBarLink>
            <Link to="/gallery">Gallery</Link>
          </NavBarLink>
          <NavBarLink>
            <Link to="/about">About Me</Link>
          </NavBarLink>
        </NavBarLinksContainer>
      </NavBarContainer>
      <Separator />
    </>
  );
};

export default NavBar;
