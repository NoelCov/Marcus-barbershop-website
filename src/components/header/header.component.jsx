import React from "react";

import {
  HeaderContainer,
  HeaderTitle,
  HeaderTitleText,
  LogoContainer,
  StyledButton,
  StyledButton2,
  ButtonsContainer,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer />
      <HeaderTitle>Marcus Cuttz</HeaderTitle>
      <HeaderTitleText>Best haircuts in the 209</HeaderTitleText>
      <ButtonsContainer>
        <StyledButton>Make Appointment</StyledButton>
        <StyledButton2>Contact Me</StyledButton2>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
