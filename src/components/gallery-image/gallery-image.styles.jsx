import styled from "styled-components";

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
`

export const ImageContainer = styled.div`
  height: 100%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  @media screen and (max-width: 850px) {
    max-width: 300px;
    height: 320px;
  }
`;