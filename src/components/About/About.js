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
          Hi, this is Nishant, a 23' graduate from Indian Institute of Technology, Goa, 
          where I completed my Bachelor of Technology in Mathematics and Computing. 
          I am an enthusiastic and dedicated front-end / Software developer with a strong passion for creating 
          innovative solutions. 
          </StyledParagraph>
          <StyledParagraph>
          I am based in India and thrive on the challenges that come with developing 
          cutting-edge applications and websites. 
          I am constantly seeking opportunities to expand my knowledge and skills, and I am committed to delivering 
          high-quality results in every project I undertake.
          </StyledParagraph>
          
          <StyledParagraph>
            I love to design and create responsive websites or web apps from
            scratch. The technologies, tools and languages I am using to build
            my projects are HTML, CSS, JavaScript, REACT JS,
            Bootstrap, Git and GitHub, Figma and VS Code.
          </StyledParagraph>
          <StyledParagraph>
            I have eagerness to learn something new every day and I love to
            share my knowledge to my fellow students and developers. And I am
            looking forward to talk / connect with you!
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
