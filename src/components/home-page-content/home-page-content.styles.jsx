import styled from "styled-components";

export const HomePageContentContainer = styled.div`
  padding: 10vh 0;
  background-color: #12131c;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 850px) {
    padding: 8vh 0;
  }
`;

export const HomePageTitle = styled.h2`
  font-size: 30px;
  color: #eab86b;
  padding: 2vh 0 0;

  @media screen and (max-width: 850px) {
    font-size: 26px;
  }

  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`;

export const CustomButtonContainer = styled.div`
  margin-top: 8vh;
  
  @media screen and (max-width: 450px) {
    margin-top: 5vh;
  }
`;
