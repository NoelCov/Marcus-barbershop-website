import React from "react";

import {
  NavBarContainer,
  NavBarTitle,
  NavBarLinksContainer,
  NavBarLink,
} from "./navbar.styles";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarTitle>Marcus' BarberShop</NavBarTitle>
      <NavBarLinksContainer>
        <NavBarLink><Link to="/">Home</Link></NavBarLink>
        <NavBarLink><Link to="/gallery">Gallery</Link></NavBarLink>
        <NavBarLink>Contact Me</NavBarLink>
      </NavBarLinksContainer>
    </NavBarContainer>
  );
};

export default NavBar;
