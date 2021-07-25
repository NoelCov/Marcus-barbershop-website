import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #eab86b;
  display: flex;
  align-items: center;
  height: 6vh;
  padding: 0 2.5vw;
  max-width: 100vw;
`;

export const FooterTitle = styled.p`
  font-size: 18px;

  @media screen and (max-width: 850px) {
    font-size: 16px;
  }

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;

export const FooterWebsiteLink = styled.a`
  font-size: 18px;

  &:hover {
    color: gray;
  }

  @media screen and (max-width: 850px) {
    font-size: 16px;
  }

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-left: auto;
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 22px;
  padding: 5px;
  border-radius: 6px;
  background-color: #12131c;
  color: #eab86b;

  &:hover {
    color: white;
  }

  @media screen and (max-width: 850px) {
    font-size: 18px;
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
