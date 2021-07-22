import React from "react";

import { Image, ImageContainer } from "./gallery-image.styles";

const GalleryImage = ({ src }) => {
  return (
    <ImageContainer>
      <Image alt="haircut" src={src} />
    </ImageContainer>
  );
};

export default GalleryImage;
