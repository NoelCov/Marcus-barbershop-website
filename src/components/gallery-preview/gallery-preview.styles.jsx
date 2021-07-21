import styled from "styled-components";

export const GalleryPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 10vh 5vw 0;
  justify-items: center;
  position: relative;
`;

export const ImageContainer = styled.img`
  width: 85%;
  height: 100%;
  border: 1.5px solid white;
  padding: 5px;
`