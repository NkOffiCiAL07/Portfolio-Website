import React from "react";
import {
  TechnologiesContainer,
  TechnologiesHeader,
  TechnologiesIcons,
  TechnologyIcon,
} from "../styles/Technologies.styled";
import { iconsData } from "./icons";
import useScrollReveal from "../../hooks/useScrollReveal";

const Technologies = () => {
  const sectionRef = useScrollReveal();

  return (
    <TechnologiesContainer id="skills" ref={sectionRef}>
      <TechnologiesHeader data-reveal>Technologies I am familiar with</TechnologiesHeader>

      <TechnologiesIcons data-reveal data-reveal-delay="2">
        {iconsData.map((iconData) => {
          return (
            <TechnologyIcon
              key={iconData.id}
              src={iconData.icon}
              alt={iconData.name}
              title={iconData.name}
              {...iconData}
            />
          );
        })}
      </TechnologiesIcons>
    </TechnologiesContainer>
  );
};

export default Technologies;
