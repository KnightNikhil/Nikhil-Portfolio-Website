import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 50% 40%;
  padding: 1rem;
  height: 100vh;

`;
export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  color: rebeccapurple;
  font-size: 2rem;
  justify-content: space-evenly;
  align-items: center;
`;

export const Name = styled.h1``;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: rebeccapurple;
  padding: 1rem 0;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
`;

export const PhotoCont = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem;
  justify-content: center;
`;
export const Photo = styled.img`
  height: 200px;
  border-radius: 50%;
`;
