import styled from "styled-components";
import {Link} from "react-scroll"


export const FooterContainer = styled.div`
  width: 100%;
  background: rebeccapurple;
  display: flex;
  justify-content: space-evenly;
  color: white;
  padding: 1rem;
`;

export const IconsContainer = styled.div`
  display: grid;
  grid-row: repeat(1, 5fr);
  align-items: center;
  justify-content: center;
`;

export const SocialMediaIcons = styled.div`
  font-size: 1.5rem;
  cursor: pointer;

`;

export const SocialMediaHandels = styled.div`
  font-size: 1rem;
  cursor: pointer;
`;

export const FooterMenu = styled.div`
  color: white;
  display: grid;
  grid-row: repeat(1, 10fr);
  grid-column: repeat(1, 5fr);
`;

export const FooterMenuList = styled(Link)`
  font-size: 1rem;
  cursor: pointer;
`;

export const ContactMe = styled.div`
  display: grid;
  grid-row: repeat(1, 10fr);
  grid-column: repeat(1, 5fr);
  font-size: 1.25rem;
  align-items: center;
  justify-content: center;
`;

export const anchor = styled.a`
color: white;
`