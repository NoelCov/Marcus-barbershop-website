import React from "react";

import Gallery from "../gallery/gallery.component";

import { GalleryPageContentContainer, Separator } from "./gallery-page-content.styles";

const GalleryPageContent = () => {
  return (
    <GalleryPageContentContainer>
      <Separator />
      <Gallery />
    </GalleryPageContentContainer>
  );
};

export default GalleryPageContent;
