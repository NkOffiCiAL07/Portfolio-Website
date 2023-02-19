import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  StyledButtonsContainer,
  StyledHome,
  Title,
  Line,
  Greeting,
  Social,
  Socials,
  Quote,
} from "../styles/Home.styled";
import "./style.css";
import projectIcon from "../../assets/icons/project-icon.svg";
import aboutIcon from "../../assets/icons/about-me.svg";
import { IconContext } from "react-icons";
import { GrLinkedinOption } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";

const Home = () => {
  let today = new Date(),
  hour = today.getHours();

  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
      <h2 className="name1 name2">Nishant Kumar</h2>
      <Title className="container animation"/>
        <p>
          I <span className="change-text"></span>{" "}
          <span className="responsive">r</span>
          <span className="responsive">e</span>
          <span className="responsive">s</span>
          <span className="responsive">p</span>
          <span className="responsive">o</span>
          <span className="responsive">n</span>
          <span className="responsive">s</span>
          <span className="responsive">i</span>
          <span className="responsive">v</span>
          <span className="responsive">e</span> websites.
        </p>
        <StyledButtonsContainer>
          <StyledButton
            icon={projectIcon}
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Projects</span>
          </StyledButton>
          <StyledButton
            icon={aboutIcon}
            secondary="true"
            content="B"
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>About me</span>
          </StyledButton>
        </StyledButtonsContainer>
        <Line />
        <Greeting>
          have a great
          <span>
            {hour < 12 ? " morning" : hour < 18 ? " afternoon" : " evening"}
          </span>
          .
        </Greeting>
        <Socials>
          <Social
            href="nishantkumar19041@gmail.com"
            target="_blank"
            rel="Nishant Kumar"
          >
            <FaEnvelope />
          </Social>
          <Social
            href="https://github.com/nishant-19041"
            target="_blank"
            rel="Nishant Kumar"
          >
            <GoMarkGithub />
          </Social>
          <Social
            href="https://www.linkedin.com/in/nishant-kumar-365395193/"
            target="_blank"
            rel="Nishant Kumar"
          >
            <GrLinkedinOption />
          </Social>
        </Socials>
        <Quote>Don't wish for it! Work for it!</Quote>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
