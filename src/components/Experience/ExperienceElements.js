import styled from "styled-components";

export const ExperienceMainContainer = styled.div`
display: flex;
align-items: center; 
width: 100%;
background: pink;
justify-content: center;
padding: 2rem;
height: 100vh;
`

export const ExpContainer = styled.div`
  background: white;
  color: black ;
  padding: 50px;
 
`;

export const ContHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  font-size: 1rem;
  align-items: center;
  padding: 1rem;
`;

export const Heading1 = styled.h2`
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  color: ${({ educationOpen }) => (educationOpen ? "rebeccapurple" : "black")};
  &: hover {
    color: rebeccapurple;
  }
`;

export const Heading2 = styled.h2`
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  color: ${({ educationClose }) =>
    educationClose ? "rebeccapurple" : "black"};
  &: hover {
    color: rebeccapurple;
  }
`;

export const EducationContentBox = styled.div`
  padding: 1rem 0;
  border-radius: 50px;
`;

export const WorkContentBox = styled.div`
  padding: 1rem 0;
  border-radius: 5%;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  margin-bottom: 1rem;
`;

export const ConnectingLine = styled.div`
  display: block;
  width: 3px;
  height: 110%;
  background-color: black;
  transform: translate(4px, -7px);
`;

export const ConnectorDots = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 100%;
`;

export const ExpContent = styled.div`
  padding: 10px 10px;
  align-items: center;
  justify-self: center;
`;

export const ContentHeading = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
`;
export const ContentCalender = styled.div`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.85);
`;
export const ContentDesc = styled.div`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.85);
`;

export const ContentSubtitle = styled.div`
  font-size: 1.1rem;
`;
