import React from "react";
import {
  ExpContainer,
  ExpContent,
  ContentHeading,
  ContentCalender,
  ContentDesc,
  HeadingContainer,
  Heading1,
  Heading2,
  ContentContainer,
  ConnectingLine,
  ConnectorDots,
  ContentSubtitle,
  ContHeading,
  WorkContentBox,
  EducationContentBox,
  ExperienceMainContainer
} from "./ExperienceElements";

import { FaCalendarAlt, FaGraduationCap } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";

const Experience = ({ educationOpen, seteducationOpen }) => {
  return (
    <ExperienceMainContainer id="/experience">
      <ExpContainer>
        <ContHeading>EXPERIENCE</ContHeading>
        <HeadingContainer>
          <Heading1 onClick={() => seteducationOpen(true)} educationOpen={educationOpen}>
            <FaGraduationCap /> Education
          </Heading1>
          <Heading2 onClick={() => seteducationOpen(false)} educationClose={!educationOpen}>
            <HiBriefcase /> Work
          </Heading2>
        </HeadingContainer>

        {educationOpen ? (
          <EducationContentBox educationOpen= {educationOpen}>
            <ContentContainer>
              <ExpContent>
                <ContentHeading>B.Tech - 9.3 CGPA</ContentHeading>
                <ContentDesc>SRM University, Chennai</ContentDesc>
                <ContentCalender>
                  <FaCalendarAlt /> 2018 - Pursuing
                </ContentCalender>
              </ExpContent>
              <div>
                <ConnectorDots />
                <ConnectingLine></ConnectingLine>
              </div>
            </ContentContainer>

            <ContentContainer>
              <div></div>
              <div>
                <ConnectorDots />
                <ConnectingLine></ConnectingLine>
              </div>
              <ExpContent>
                <ContentHeading>HSC - 80.4%</ContentHeading>
                <ContentDesc>Noble International School, Bhilwara</ContentDesc>
                <ContentCalender>
                  <FaCalendarAlt /> 2017
                </ContentCalender>
              </ExpContent>
            </ContentContainer>

            <ContentContainer>
              <ExpContent>
                <ContentHeading>SSC - 9.6 CGPA</ContentHeading>
                <ContentDesc>SMPS, Bhilwara</ContentDesc>
                <ContentCalender>
                  <FaCalendarAlt /> 2015
                </ContentCalender>
              </ExpContent>
              <div>
                <ConnectorDots />
                <ConnectingLine></ConnectingLine>
              </div>
            </ContentContainer>
          </EducationContentBox>
        ) : (
          <WorkContentBox>
            <ContentContainer>
              <ExpContent>
                <ContentHeading>Exam Lounge</ContentHeading>
                <ContentSubtitle>Data Science Intern</ContentSubtitle>
                <ContentDesc>
                  Exam Lounge is an EdTech platform that primarily focuses on
                  Stress-Free Learning.
                </ContentDesc>
                <ContentDesc>
                  Implemented, Flow Theory which keeps students engaged and
                  focused.
                </ContentDesc>
                <ContentCalender>
                  <FaCalendarAlt /> July 2020 - Oct 2020
                </ContentCalender>
              </ExpContent>
              <div>
                <ConnectorDots />
                <ConnectingLine></ConnectingLine>
              </div>
            </ContentContainer>
            <ContentContainer>
              <div></div>
              <div>
                <ConnectorDots />
                <ConnectingLine></ConnectingLine>
              </div>
              <ExpContent>
                <ContentHeading>Samsung PRISM</ContentHeading>
                <ContentSubtitle>Research Student</ContentSubtitle>
                <ContentDesc>
                  Developed Conversation Summarization & Slot Identification
                  Work-let as a Machine Learning Developer.
                </ContentDesc>
                <ContentCalender>
                  <FaCalendarAlt /> Sept 2020 - April 2021
                </ContentCalender>
              </ExpContent>
            </ContentContainer>

            <ContentContainer>
              <ExpContent>
                <ContentHeading>CSE Association</ContentHeading>
                <ContentDesc>
                  Developed Website for the Association.{" "}
                </ContentDesc>
                <ContentCalender>
                  <FaCalendarAlt /> March 2021
                </ContentCalender>
              </ExpContent>
              <div>
                <ConnectorDots />
                <ConnectingLine></ConnectingLine>
              </div>
            </ContentContainer>
          </WorkContentBox>
        )}
      </ExpContainer>
    </ExperienceMainContainer>
  );
};

export default Experience;
