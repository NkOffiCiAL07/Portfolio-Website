import React from "react";
import { StyledParagraph, StyledLink } from "../styles/Typography.styled";
import { ProjectsContainer, StyledProjects } from "../styles/Projects.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { projectData } from "./projectsData";
import ProjectCardComponent from "./ProjectCard";
import useScrollReveal from "../../hooks/useScrollReveal";

const Projects = () => {
  const sectionRef = useScrollReveal();

  return (
    <StyledProjects id="projects" ref={sectionRef}>
      <SectionHeading data-reveal>
        <SectionTitle number="03">Projects</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark="true" textAlign="center" data-reveal data-reveal-delay="1">
        Selected projects I've worked on recently.{" "}
        <StyledLink
          href="https://github.com/nishant-19041"
          target="_blank"
          rel="noopener noreferrer"
        >
          Want to see more?
        </StyledLink>
      </StyledParagraph>
      <ProjectsContainer data-reveal data-reveal-delay="2">
        {projectData.map((project) => {
          return <ProjectCardComponent key={project.id} {...project} />;
        })}
      </ProjectsContainer>
    </StyledProjects>
  );
};

export default Projects;
