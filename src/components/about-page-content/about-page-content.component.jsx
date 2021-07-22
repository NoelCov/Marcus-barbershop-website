import React from "react";

import marcusImage from "../../assets/marcus-profile-pic.jpg";

import {
  AboutPageContentContainer,
  AboutMeContainer,
  ImageContainer,
  TextContainer,
} from "./about-page-content.styles";

const AboutPageContent = () => {
  return (
    <AboutPageContentContainer>
      <AboutMeContainer>
        <ImageContainer src={marcusImage} />
        <TextContainer>
          My name is Marcus and I'm a barber from California. I've been cutting
          hair for about 3 years. I started doing it out of curiosity and I quickly
          discovered that it is my pasion. If you ever get the chance, come to
          my barbershop, you will not regret it.
        </TextContainer>
      </AboutMeContainer>
    </AboutPageContentContainer>
  );
};

export default AboutPageContent;
