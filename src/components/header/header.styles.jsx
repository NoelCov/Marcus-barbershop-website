import styled from "styled-components";
import {ReactComponent as ReactLogo} from "../../assets/crown.svg";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh 20vw;
  justify-content: center;
  align-items: center;
  background-color: #eab86b;
`;

export const HeaderTitle = styled.h2`
  font-size: 75px;
  font-family: 'Dancing Script', cursive;
  margin: 0;
`

export const HeaderTitleText = styled.p`
  font-size: 18px;
`

export const LogoContainer = styled(ReactLogo)`
  padding: 2vh 0;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 8vh 0 0;
`

export const StyledButton = styled.button`
  padding: 1.5vh 2vw;
  color: black;
  font-size: 16px;
  border: 1.5px solid white;
  background-color: #eab86b;
  cursor: pointer;
`

export const StyledButton2 = styled.button`
  padding: 1.5vh 2vw;
  color: #eab86b;
  font-size: 16px;
  border: 1.5px solid black;
  background-color: black;
  cursor: pointer;
`