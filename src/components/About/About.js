import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/1.png";
import downloadIcon from "../../assets/icons/download-icon.svg";
// import resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="01">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
        <StyledParagraph>
  Hi, I’m <span className="highlight">Nishant Kumar</span> — a Mathematics and Computing 
  graduate from <span className="highlight">IIT Goa</span> (Class of 2023).
</StyledParagraph>

<StyledParagraph>
  I’m a passionate <span className="highlight">Front-End & Software Developer</span> 
  who enjoys building clean, intuitive, and scalable digital experiences. 
  I care deeply about writing maintainable code, crafting thoughtful UI, 
  and solving real-world problems through technology.
</StyledParagraph>

<StyledParagraph>
  Based in India, I love working on challenging projects that push me to learn 
  and grow every day. Whether it’s designing responsive interfaces or 
  developing robust web applications, I always strive to deliver 
  <span className="highlight"> high-quality, impactful solutions</span>.
</StyledParagraph>

<StyledParagraph>
  I enjoy turning ideas into products from scratch and frequently work with 
  HTML, CSS, JavaScript, React, Git, GitHub, Bootstrap, Figma, and VS Code. 
  I’m always curious, always learning, and always excited to collaborate 
  and connect.
</StyledParagraph>

          <Resume>
            <ResumeLink
              // href={resume}
              icon={downloadIcon}
              download="resume-jericho-bantiquete"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
