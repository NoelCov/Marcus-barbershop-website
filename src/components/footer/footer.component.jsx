import React from "react";

import {
  FooterContainer,
  FooterTitle,
  FooterWebsiteLink,
  FooterLinksContainer,
  FooterLink,
} from "./footer.styles";

import { AiOutlineInstagram } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>
        {"Website created by "}
        <FooterWebsiteLink href="https://www.no3lcodes.com/" target="_blank">
          Noel Covarrubias®
        </FooterWebsiteLink>
      </FooterTitle>

      <FooterLinksContainer>
        <FooterLink
          href="https://www.instagram.com/marcus_cuttz/"
          target="_blank"
        >
          <AiOutlineInstagram />
        </FooterLink>
        <FooterLink
          href="https://www.instagram.com/_marcus_ponce/"
          target="_blank"
        >
          <RiInstagramFill />
        </FooterLink>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
