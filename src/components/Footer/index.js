import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import {
  SocialMediaIcons,
  SocialMediaHandels,
  FooterContainer,
  IconsContainer,
  FooterMenu,
  FooterMenuList,
  ContactMe,
  anchor,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer id="/contactme">
      <IconsContainer>
        <SocialMediaIcons>
          <a
            href="https://www.linkedin.com/in/knightnikhil/"
            style={{ color: "white" }}
          >
            <FaLinkedinIn />
          </a>
        </SocialMediaIcons>

        <SocialMediaIcons>
          <a href="https://github.com/KnightNikhil" style={{ color: "#FFF" }}>
            <FaGithub />
          </a>
        </SocialMediaIcons>
      </IconsContainer>

      <FooterMenu>
        <FooterMenuList to="/about" smooth={true} duration={1000}>
          Home
        </FooterMenuList>
        <FooterMenuList to="/skills" smooth={true} duration={1000}>
          Skills
        </FooterMenuList>
        <FooterMenuList to="/projects" smooth={true} duration={1000}>
          Projects
        </FooterMenuList>
        <FooterMenuList to="/experience" smooth={true} duration={1000}>
          Experience
        </FooterMenuList>
      </FooterMenu>
      <ContactMe>
        Contact Details
        <SocialMediaHandels>
          <FaEnvelope /> nikhilladdha109@gmail.com
        </SocialMediaHandels>
        <SocialMediaHandels>
          <FaPhoneAlt /> +91-8824947109
        </SocialMediaHandels>
      </ContactMe>
    </FooterContainer>
  );
};

export default Footer;
