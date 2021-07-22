import React from "react";

import { GalleryContainer } from "./gallery.styles";

import GalleryImage from "../gallery-image/gallery-image.component";

import images from "./images";


const Gallery = () => {
  return (
    <GalleryContainer>
      {images.map((image, index) => {
        console.log(image);
        return <GalleryImage key={index} src={image} />
      })}
    </GalleryContainer>
  );
};

export default Gallery;
