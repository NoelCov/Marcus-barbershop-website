import React from "react";
import { Link } from "react-router-dom";

import {
  HomePageContentContainer,
  HomePageTitle,
  CustomButtonContainer,
} from "./home-page-content.styles";

import CustomButton from "../custom-button/custom-button.component";
import GalleryPreview from "../gallery-preview/gallery-preview.component";

const HomePageContent = () => {
  return (
    <HomePageContentContainer>
      <HomePageTitle>WELCOME TO MY BARBERSHOP</HomePageTitle>
      <GalleryPreview />
      <CustomButtonContainer>
        <Link to="/gallery">
          <CustomButton
            backgroundColor="#12131c"
            color="#eab86b"
            borderColor="#eab86b"
          >
            View Gallery
          </CustomButton>
        </Link>
      </CustomButtonContainer>
    </HomePageContentContainer>
  );
};

export default HomePageContent;
