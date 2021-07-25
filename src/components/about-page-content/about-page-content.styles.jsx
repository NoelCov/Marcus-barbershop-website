import styled from "styled-components";

export const AboutPageContentContainer = styled.div`
  min-height: 85vh;
  background-color: #12131c;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 450px) {
    min-height: 90vh;
  }
`

export const AboutMeContainer = styled.div`
  display: flex;
  max-width: 50vw; 
  max-height: 40vh;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 4vh 2vw;
  border: 0.5px solid white;

  @media screen and (max-width: 850px) {
    max-width: 75vw;
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;
    max-width: 80vw;
    min-height: 50vh;
    padding: 6vh 2vw;
  }
`

export const ImageContainer = styled.img`
  height: auto;
  max-width: 20vw;

  @media screen and (max-width: 850px) {
    max-width: 25vw;
  }

  @media screen and (max-width: 450px) {
    max-width: 80%;
  }
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 50%;
  color: white;
  font-size: 20px;
  line-height: 30px;

  @media screen and (max-width: 850px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
  }
`