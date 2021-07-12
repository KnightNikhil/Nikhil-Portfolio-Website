import React, { useState } from "react";
import {
  SkillsContainer,
  CategoriesContainer,
  CategoryHeading1,
  CategoryHeading2,
  CategoryHeading3,
  CategoryHeading4,
  CategoryBox,
  SkillBox,
  SkillHeading,
  SkillContent,
  SkillPercent,
  SkillVisual9,
  SkillVisual8,
  SkillVisual7,
  SkillVisual6,
} from "./SkillsElements";

import { BiRightArrow, BiDownArrow } from "react-icons/bi";

const Skills = () => {
  const [skillOpen1, setskillOpen1] = useState(false);
  const [skillOpen2, setskillOpen2] = useState(false);
  const [skillOpen3, setskillOpen3] = useState(false);
  const [skillOpen4, setskillOpen4] = useState(false);
  return (
    <SkillsContainer id="/skills">
      SKILLS
      <CategoriesContainer>
        <CategoryBox>
          <CategoryHeading1
            onClick={() => setskillOpen1(skillOpen1 ? false : true)}
            skillOpen1={skillOpen1}
          >
            Web Developer {skillOpen1 ? <BiDownArrow /> : <BiRightArrow />}
          </CategoryHeading1>
          {skillOpen1 ? (
            <>
              <SkillBox>
                <SkillContent>
                  <SkillHeading>React JS</SkillHeading>
                  <SkillPercent>70%</SkillPercent>
                </SkillContent>
                <SkillVisual7></SkillVisual7>
              </SkillBox>

              <SkillBox>
                <SkillContent>
                  <SkillHeading>JavaScript</SkillHeading>
                  <SkillPercent>70%</SkillPercent>
                </SkillContent>
                <SkillVisual7></SkillVisual7>
              </SkillBox>

              <SkillBox>
                <SkillContent>
                  <SkillHeading>HTML</SkillHeading>
                  <SkillPercent>90%</SkillPercent>
                </SkillContent>
                <SkillVisual9></SkillVisual9>
              </SkillBox>

              <SkillBox>
                <SkillContent>
                  <SkillHeading>CSS</SkillHeading>
                  <SkillPercent>80%</SkillPercent>
                </SkillContent>
                <SkillVisual8></SkillVisual8>
              </SkillBox>
            </>
          ) : (
            <> </>
          )}
        </CategoryBox>

        <CategoryBox>
          <CategoryHeading2
            onClick={() => {
              setskillOpen2(skillOpen2 ? false : true);
            }}
            skillOpen2={skillOpen2}
          >
            Machine Learning {skillOpen2 ? <BiDownArrow /> : <BiRightArrow />}
          </CategoryHeading2>

          {skillOpen2 ? (
            <>
              <SkillBox>
                <SkillContent>
                  <SkillHeading>Computer Vision</SkillHeading>
                  <SkillPercent>70%</SkillPercent>
                </SkillContent>
                <SkillVisual7></SkillVisual7>
              </SkillBox>

              <SkillBox>
                <SkillContent>
                  <SkillHeading>NLP</SkillHeading>
                  <SkillPercent>60%</SkillPercent>
                </SkillContent>
                <SkillVisual6></SkillVisual6>
              </SkillBox>

              <SkillBox>
                <SkillContent>
                  <SkillHeading>ML Algorithms</SkillHeading>
                  <SkillPercent>70%</SkillPercent>
                </SkillContent>
                <SkillVisual7></SkillVisual7>
              </SkillBox>
            </>
          ) : (
            <> </>
          )}
        </CategoryBox>

        <CategoryBox>
          <CategoryHeading3
            onClick={() => {
              setskillOpen3(skillOpen3 ? false : true);
            }}
            skillOpen3={skillOpen3}
          >
            Python {skillOpen3 ? <BiDownArrow /> : <BiRightArrow />}
          </CategoryHeading3>
          {skillOpen3 ? (
            <>
              <SkillBox>
                <SkillContent>
                  <SkillHeading>Flask</SkillHeading>
                  <SkillPercent>70%</SkillPercent>
                </SkillContent>
                <SkillVisual7></SkillVisual7>
              </SkillBox>

              <SkillBox>
                <SkillContent>
                  <SkillHeading>Selenium</SkillHeading>
                  <SkillPercent>60%</SkillPercent>
                </SkillContent>
                <SkillVisual6></SkillVisual6>
              </SkillBox>

              <SkillBox>
                <SkillContent>
                  <SkillHeading>AI</SkillHeading>
                  <SkillPercent>70%</SkillPercent>
                </SkillContent>
                <SkillVisual7></SkillVisual7>
              </SkillBox>
            </>
          ) : (
            <> </>
          )}
        </CategoryBox>

        <CategoryBox>
          <CategoryHeading4
            onClick={() => {
              setskillOpen4(skillOpen4 ? false : true);
            }}
            skillOpen4={skillOpen4}
          >
            Languages {skillOpen4 ? <BiDownArrow /> : <BiRightArrow />}
          </CategoryHeading4>
          {skillOpen4 ? (
            <>
              <SkillBox>
                <SkillContent>
                  <SkillHeading>Python</SkillHeading>
                  <SkillPercent>70%</SkillPercent>
                </SkillContent>
                <SkillVisual7></SkillVisual7>
              </SkillBox>

              <SkillBox>
                <SkillContent>
                  <SkillHeading>C</SkillHeading>
                  <SkillPercent>60%</SkillPercent>
                </SkillContent>
                <SkillVisual6></SkillVisual6>
              </SkillBox>

              <SkillBox>
                <SkillContent>
                  <SkillHeading>C++</SkillHeading>
                  <SkillPercent>70%</SkillPercent>
                </SkillContent>
                <SkillVisual7></SkillVisual7>
              </SkillBox>
            </>
          ) : (
            <> </>
          )}
        </CategoryBox>
      </CategoriesContainer>
    </SkillsContainer>
  );
};

export default Skills;
