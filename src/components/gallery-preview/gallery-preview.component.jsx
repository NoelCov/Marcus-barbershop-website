import React from "react";

import { GalleryPreviewContainer, ImageContainer } from "./gallery-preview.styles";

import image1 from "../../assets/marcus-cuts1.jpg";
import image2 from "../../assets/marcus-cuts2.jpg";
import image3 from "../../assets/marcus-cuts3.jpg";

const GalleryPreview = () => {
  return (
    <GalleryPreviewContainer>
      <ImageContainer src={image1} alt="haircut" />
      <ImageContainer src={image2} alt="haircut" />
      <ImageContainer src={image3} alt="haircut" />
    </GalleryPreviewContainer>
  );
};

export default GalleryPreview;
