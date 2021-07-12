import styled from "styled-components";
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: red;;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  `;

export const CardsContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const Cards = styled.div`
  display: flex;
  background: white;
  border: 2px solid white;
  min-height: 300px;
  max-height: 300px;
  min-width: 300px;
  max-width: 300px;
  
  border-radius: 5%;
  margin: 10px 10px;
  justify-content: center;
  align-items: center;
  padding: 20px 10px 20px 10px;
  font-size: 1.5rem;
  flex-direction: column;
  color: black;
  box-shadow: 1px 1px 1px rgb(210, 200, 219);
  & ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

export const CardImages = styled.img`
  height: 100%;
  width: 100%;
`;

export const CardText = styled.div`
padding: 0.5rem;
overflow: scroll;

}
`;
