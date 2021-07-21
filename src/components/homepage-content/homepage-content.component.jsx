import React from "react";
import GalleryPreview from "../gallery-preview/gallery-preview.component";

import {
  HomePageContentContainer,
  HomePageTitle,
  CustomButtonContainer,
} from "./homepage-content.styles";

import CustomButton from "../custom-button/custom-button.component";

const HomePageContent = () => {
  return (
    <HomePageContentContainer>
      <HomePageTitle>WELCOME TO MY BARBERSHOP</HomePageTitle>
      <GalleryPreview />
      <CustomButtonContainer>
        <CustomButton
          backgroundColor="#12131c"
          color="#eab86b"
          borderColor="#eab86b"
        >
          View Gallery
        </CustomButton>
      </CustomButtonContainer>
    </HomePageContentContainer>
  );
};

export default HomePageContent;
