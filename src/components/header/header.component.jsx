import React from "react";
import { Link } from "react-router-dom";

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
        <a href="mailto:testemail123@gmail.com">
          <CustomButton
            color="black"
            borderColor="white"
            backgroundColor="#eab86b"
          >
            Make Appointment
          </CustomButton>
        </a>

        <Link to="/about">
          <CustomButton
            color="#eab86b"
            borderColor="black"
            backgroundColor="black"
          >
            About Me
          </CustomButton>
        </Link>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
