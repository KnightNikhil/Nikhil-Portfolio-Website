import styled from "styled-components";
import {Link} from "react-scroll"

export const HeaderContainer = styled.nav`
  background-color: transparent;
  height: 75px;
  position: sticky;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: space-evenly;
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;

  }
`;

export const HeaderItems = styled(Link)`
  background-color: transparent;
  color: black;
  cursor: pointer;

  &:hover {
    color: rebeccapurple;
  }
  padding: 10px;
`;

export const HeaderLogo = styled.div`
  color: black;
  left: 10px;
  margin-left: 25px;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;

`;
