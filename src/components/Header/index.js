import React from "react";
import { FaBars } from "react-icons/fa";

import {
  HeaderContainer,
  HeaderItems,
  HeaderLogo,
  HeaderMenu,
  MobileIcon,
} from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <HeaderContainer id="/about">
      <HeaderLogo>Nikhil Laddha</HeaderLogo>
      <HeaderMenu>
        <HeaderItems to="/about" smooth={true} duration={1000}>
          About
        </HeaderItems>
        <HeaderItems to="/experience" smooth={true} duration={1000}>
          Experience
        </HeaderItems>
        <HeaderItems to="/skills" smooth={true} duration={1000}>
          Skills
        </HeaderItems>
        <HeaderItems to="/projects" smooth={true} duration={1000}>
          Projects
        </HeaderItems>
        <HeaderItems to="/contactme" smooth={true} duration={1000}>
          Contact Me
        </HeaderItems>
      </HeaderMenu>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
    </HeaderContainer>
  );
};

export default Header;
