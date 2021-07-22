import React from "react";

import Gallery from "../gallery/gallery.component";

import { GalleryPageContentContainer } from "./gallery-page-content.styles";

const GalleryPageContent = () => {
  return (
    <GalleryPageContentContainer>
      <Gallery />
    </GalleryPageContentContainer>
  );
};

export default GalleryPageContent;
