import React from "react";
import { MenuList, SidebarContainer, CloseBtn } from "./SidebarElements";
import { FaTimes } from "react-icons/fa";
const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer toggle={toggle} isOpen={isOpen}>
      <CloseBtn onClick={toggle}>
        <FaTimes />
      </CloseBtn>

      <MenuList to="/about" onClick={toggle}>
        About
      </MenuList>
      <MenuList to="/experience" onClick={toggle}>
        Experience
      </MenuList>
      <MenuList to="/skills" onClick={toggle}>
        Skills
      </MenuList>
      <MenuList to="/projects" onClick={toggle}>
        Projects
      </MenuList>
      <MenuList to="/contactme" onClick={toggle}>
        Contact Me
      </MenuList>
    </SidebarContainer>
  );
};

export default Sidebar;
