import styled from "styled-components";
import {ReactComponent as ReactLogo} from "../../assets/crown.svg";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh 0;
  height: 60vh;
  justify-content: center;
  align-items: center;
  background-color: #eab86b;

  @media screen and (max-width: 850px) {
    height: 45vh;
  }

  @media screen and (max-width: 450px) {
    height: 30vh;
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 75px;
  font-family: 'Dancing Script', cursive;
  margin: 0;

  @media screen and (max-width: 850px) {
    font-size: 60px;
  }

  @media screen and (max-width: 450px) {
    font-size: 40px;
  }
`

export const HeaderTitleText = styled.p`
  font-size: 18px;

  @media screen and (max-width: 850px) {
    font-size: 15px;
  }

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`

export const LogoContainer = styled(ReactLogo)`
  padding: 2vh 0;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 8vh 0 0;

  @media screen and (max-width: 850px) {
    padding: 4vh 0 0;
  }
`