import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
  padding: 15vh 10vw;
  align-items: center;

  @media screen and (max-width: 850px) {
    display: flex;
    padding: 12vh 5vw;
    flex-wrap: wrap;
    gap: 60px;
    align-items: center;
    justify-content: center;
  }
`;