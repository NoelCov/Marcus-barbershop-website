import React from "react";

import {
  HeaderContainer,
  HeaderTitle,
  HeaderTitleText,
  LogoContainer,
  ButtonsContainer,
} from "./header.styles";

import CustomButton from "../custom-button/custom-button.component";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer />
      <HeaderTitle>Marcus Cuttz</HeaderTitle>
      <HeaderTitleText>Best haircuts in the 209</HeaderTitleText>
      <ButtonsContainer>
        <CustomButton
          color="black"
          borderColor="white"
          backgroundColor="#eab86b"
        >
          Make Appointment
        </CustomButton>
        <CustomButton
          color="#eab86b"
          borderColor="black"
          backgroundColor="black"
        >
          Contact Me
        </CustomButton>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
