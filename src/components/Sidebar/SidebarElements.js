import styled from "styled-components";
import {Link} from 'react-scroll'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: -100%;
  left: 0;
  transition: 0.3s ease-in-out;
  justify-content: center;
  top: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
`;

export const MenuList = styled(Link)`
  color: white;
  font-size: 2rem;
  justify-self: center;
  cursor: pointer;
  &: hover {
    color: rebeccapurple;
  }
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: white;
  background: transparent;
  cursor: pointer;
  outline: none;
  background: transparent;
  font-size: 2.5rem;
  cursor: pointer;
  outline: none;
`;
