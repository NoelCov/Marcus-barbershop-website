import React from "react";

import {
  NavBarContainer,
  NavBarTitle,
  NavBarLinksContainer,
  NavBarLink,
} from "./navbar.styles";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarTitle>Marcus' BarberShop</NavBarTitle>
      <NavBarLinksContainer>
        <NavBarLink>Home</NavBarLink>
        <NavBarLink>Gallery</NavBarLink>
        <NavBarLink>Contact Me</NavBarLink>
      </NavBarLinksContainer>
    </NavBarContainer>
  );
};

export default NavBar;
