import styled from "styled-components";

export const NavBarContainer = styled.nav`
  max-width: 100vw;
  display: flex;
  padding: 2vh 3vw;
  align-items: center;
  background-color: #12131c;
  color: white;

  @media screen and (max-width: 450px) {
    padding: 2vh 5vw;
  }
`;

export const NavBarTitle = styled.h2`
  font-size: 26px;
  margin: 0;
  color: #eab86b;
  font-weight: 600;
  font-size: 40px;
  letter-spacing: 3.5px;
  font-family: "Dancing Script", cursive;

  @media screen and (max-width: 850px) {
    font-size: 35px;
  }

  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;

export const Separator = styled.hr`
  height: 1px;
  margin: 0;
  background-color: gold;
`;

export const NavBarLinksContainer = styled.ul`
  margin-left: auto;
  list-style: none;
  display: flex;
  gap: 120px;
  padding: 0;

  @media screen and (max-width: 450px) {
    position: absolute; 
    display: ${props => props.hidden ? "none" : "flex"};
    flex-direction: column;
    right: 0;
    width: 35vw;
    min-height: 100vh;
    padding-top: 10vh;
    z-index: 1;
    top: 4.5vh;
    background-color: #12131c;

  }
`;

export const NavBarLink = styled.li`
  font-size: 18px;
  color: gray;

  &:hover {
    color: white;
  }

  @media screen and (max-width: 850px) {
    font-size: 16px;
  }

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;

export const HamburgerMenu = styled.div`
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    gap: 5px;
  }
`;

export const HamburgerBar = styled.span`
  width: 25px;
  height: 3px;
  background-color: #eab86b;
`;
