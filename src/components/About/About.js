import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/1.png";
import useScrollReveal from "../../hooks/useScrollReveal";

const About = () => {
  const sectionRef = useScrollReveal();

  return (
    <StyledAbout id="about" ref={sectionRef}>
      <SectionHeading dark="true" mb="3rem" data-reveal>
        <SectionTitle dark="true" number="01">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer data-reveal="slide-left" data-reveal-delay="1">
          <AboutImage src={myImage} alt="Nishant Kumar" loading="lazy" />
        </AboutImageContainer>
        <AboutDetailsContainer data-reveal="slide-right" data-reveal-delay="2">
          <StyledParagraph>
            Hi, I'm <span className="highlight">Nishant Kumar</span> — a B.Tech
            graduate in Mathematics and Computing from{" "}
            <span className="highlight">IIT Goa</span> (Class of 2023),
            currently working as a{" "}
            <span className="highlight">
              Senior Member of Technical Staff at Siemens EDA
            </span>.
          </StyledParagraph>

          <StyledParagraph>
            I specialize in building{" "}
            <span className="highlight">
              high-performance software systems
            </span>{" "}
            — from optimizing RTL parsing engines in C++ to engineering machine
            learning pipelines in Python. At Siemens, I've resolved 50+ critical
            bugs in EDA toolchains and reduced manual verification time by 20%.
          </StyledParagraph>

          <StyledParagraph>
            Previously, I worked as a{" "}
            <span className="highlight">Data Scientist at Turtlemint</span>,
            where I segmented 10,000+ users using clustering algorithms and
            built end-to-end ML pipelines with PySpark and AWS. I enjoy solving
            complex problems across the full stack — whether it's low-level C++
            optimization or crafting responsive UIs with React.
          </StyledParagraph>

          <StyledParagraph>
            My toolkit includes{" "}
            <span className="highlight">
              C++, Python, JavaScript, React, SQL, Verilog, PySpark, AWS, Git,
              and Linux
            </span>. I'm driven by curiosity, a bias for action, and a
            commitment to writing clean, maintainable code.
          </StyledParagraph>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
