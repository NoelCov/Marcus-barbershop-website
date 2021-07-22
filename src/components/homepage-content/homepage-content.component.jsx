import React from "react";
import GalleryPreview from "../gallery-preview/gallery-preview.component";

import {
  HomePageContentContainer,
  HomePageTitle,
  CustomButtonContainer,
} from "./homepage-content.styles";

import CustomButton from "../custom-button/custom-button.component";

import { Link } from "react-router-dom";

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
            View Gallery{" "}
          </CustomButton>
        </Link>
      </CustomButtonContainer>
    </HomePageContentContainer>
  );
};

export default HomePageContent;
