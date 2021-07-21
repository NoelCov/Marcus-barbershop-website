import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  padding: 2vh 3vw;
  align-items: center;
  background-color: #12131c;
  color: white;
`;

export const NavBarTitle = styled.h2`
  font-size: 26px;
  margin: 0;
  color: #eab86b;
  font-weight: 600;
  font-size: 40px;
  letter-spacing: 3.5px;
  font-family: 'Dancing Script', cursive;
`

export const NavBarLinksContainer = styled.ul`
  margin-left: auto;
  list-style: none;
  display: flex;
  gap: 25px;
`

export const NavBarLink = styled.li`
  font-size: 18px;
  color: gray;
  
  &:hover {
    color: white;
  }
`