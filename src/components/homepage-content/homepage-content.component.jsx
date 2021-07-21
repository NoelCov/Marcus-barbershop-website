import React from "react";
import GalleryPreview from "../gallery-preview/gallery-preview.component";

import {
  HomePageContentContainer,
  HomePageTitle,
} from "./homepage-content.styles";

const HomePageContent = () => {
  return (
    <HomePageContentContainer>
      <HomePageTitle>Welcome to my barbershop</HomePageTitle>
      <GalleryPreview />
    </HomePageContentContainer>
  );
};

export default HomePageContent;
