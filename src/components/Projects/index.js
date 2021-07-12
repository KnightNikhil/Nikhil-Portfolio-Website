import React, { useState } from "react";
import prismImg from "../../images/PRISM.png";
import CSEAImg from "../../images/csea_logo.svg";
import HackRxImg from "../../images/HackRx.png";
import NoFapImg from "../../images/NoFap.png";
import StockImg from "../../images/StockImage.png";

import {
  ProjectContainer,
  CardsContainer,
  Cards,
  CardImages,
  CardText,
} from "./ProjectElements";

const Projects = () => {
  const [onHover1, setonHover1] = useState(true);
  const [onHover2, setonHover2] = useState(true);
  const [onHover3, setonHover3] = useState(true);
  const [onHover4, setonHover4] = useState(true);
  const [onHover5, setonHover5] = useState(true);

  return (
    <ProjectContainer id="/projects">
      PROJECTS
      <CardsContainer>
        <Cards
          onMouseEnter={() => {
            setonHover1(false);
          }}
          onMouseLeave={() => {
            setonHover1(true);
          }}
        >
          {onHover1 ? (
            <>
              <CardImages src={prismImg}></CardImages>
              Slot Identifier
            </>
          ) : (
            <CardText>
              Developed Conversation Summarization & Slot Identification
              Work-let as a Machine Learning Developer.
            </CardText>
          )}
        </Cards>

        <Cards
          onMouseEnter={() => {
            setonHover2(false);
          }}
          onMouseLeave={() => {
            setonHover2(true);
          }}
        >
          {onHover2 ? (
            <>
              <CardImages src={CSEAImg}></CardImages> CSEA Website{" "}
            </>
          ) : (
            <CardText>
              Developed Website for CSE Association, SRM IST
            </CardText>
          )}
        </Cards>
        <Cards
          onMouseEnter={() => {
            setonHover3(false);
          }}
          onMouseLeave={() => {
            setonHover3(true);
          }}
        >
          {onHover3 ? (
            <>
              <CardImages src={HackRxImg}></CardImages> Nutrical
            </>
          ) : (
            <CardText>
              Implemented Computer Vision techniques to monitors the calories in
              the body and helps one reach the goal of being fit and healthy
              using features like personalised Diet, Sleep & Workout
              recommendation using Deep learning.{" "}
            </CardText>
          )}
        </Cards>
        <Cards
          onMouseEnter={() => {
            setonHover4(false);
          }}
          onMouseLeave={() => {
            setonHover4(true);
          }}
        >
          {onHover4 ? (
            <>
              <CardImages src={NoFapImg}></CardImages> No Fap
            </>
          ) : (
            <CardText>
              {" "}
              App that helps people maintain their No-Fap lifestyle.{" "}
            </CardText>
          )}
        </Cards>
        <Cards
          onMouseEnter={() => {
            setonHover5(false);
          }}
          onMouseLeave={() => {
            setonHover5(true);
          }}
        >
          {onHover5 ? (
            <>
              <CardImages src={StockImg}></CardImages>Stock Options{" "}
            </>
          ) : (
            <CardText>
              To collect stock market data from various online sources (NSE, BSE
              website) & predict the sentiment of the stock, build a positional
              stock trading strategy in derivatives, recommending the user the
              strategy based on the predicted price of the stock, provide the
              user with the Option Chain and calculate several “Options’
              indicators like PCR, Max Pain etc.
            </CardText>
          )}
        </Cards>
      </CardsContainer>
    </ProjectContainer>
  );
};

export default Projects;
