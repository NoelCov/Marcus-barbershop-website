import styled from "styled-components";

export const GalleryPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 10vh 5vw 0;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 850px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 8vh 3vw 0;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 450px) {
    gap: 35px;
    padding: 4vh 0 0;
    flex-direction: column;
    gap: 60px;
  }
`;

export const ImageContainer = styled.img`
  width: 85%;
  height: 100%;
  border: 1.5px solid white;
  padding: 5px;

  @media screen and (max-width: 850px) {
    max-width: 45%;
    min-height: 350px;
  }

  @media screen and (max-width: 450px) {
    max-width: 50%;
    min-height: 180px;
  }
`
