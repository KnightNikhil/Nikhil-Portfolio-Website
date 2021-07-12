import React, { useState } from "react";
import {
  SummaryContainer,
  About,
  Photo,
  SocialMedia,
  Name,
  Subtitle,
  PhotoCont,
} from "./SummaryElements";
import NikhilImg from "../../images/Nikhil.png";

import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const Summary = () => {
  // var i = 0;
  // var text1 = "Software Developer...";
  // const [subtitleText, setsubtitleText] = useState("");

  // setInterval(() => {
  //   setsubtitleText(text1.slice(0, i));
  //   i += 1;
  //   if (i > text1.length) {
  //     i = 0;
  //   }
  // }, 10000);

  var subtitleText = "Software Developer...";

  return (
    <SummaryContainer>
      <SocialMedia>
        <a href="https://www.linkedin.com/in/knightnikhil/">
          <AiOutlineLinkedin />
        </a>
        <a href="https://github.com/KnightNikhil">
          <FiGithub />
        </a>
      </SocialMedia>
      <About>
        <Name>Hi, I am Nikhil</Name>
        <Subtitle>{subtitleText}</Subtitle>
        Aiming to leverage my abilities to successfully fill the role of Web and
        ML Developer.
      </About>
      <PhotoCont>
        <Photo src={NikhilImg}></Photo>
      </PhotoCont>
    </SummaryContainer>
  );
};

export default Summary;
