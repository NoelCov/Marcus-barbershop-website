import styled from "styled-components";

export const ContactPageContentContainer = styled.div`
  min-height: 95vh;
  background-color: #12131c;
  display: flex;
  align-items: center;
  justify-content: center;
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
`

export const ImageContainer = styled.img`
  height: auto;
  max-width: 20vw;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 50%;
  color: white;
  font-size: 20px;
  line-height: 30px;
`