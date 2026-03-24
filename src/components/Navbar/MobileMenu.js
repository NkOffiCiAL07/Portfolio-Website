import React from "react";
import {
  CloseIcon,
  Icon,
  MobileMenuContainer,
  MobileMenuList,
  MobileMenuLink,
  MobileButton,
  MobileSocials,
  MobileSocial,
  MobileQuote,
  CloseText,
} from "../styles/MobileMenu.styled";

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MobileMenuContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseText>Close</CloseText>
        <CloseIcon />
      </Icon>
      <MobileMenuList>
        <MobileMenuLink to="home" onClick={toggle}>
          Home
        </MobileMenuLink>
        <MobileMenuLink to="projects" onClick={toggle}>
          Projects
        </MobileMenuLink>
        <MobileMenuLink to="about" onClick={toggle}>
          About
        </MobileMenuLink>
        <MobileMenuLink to="skills" onClick={toggle}>
          Skills
        </MobileMenuLink>
        <MobileMenuLink to="playground" onClick={toggle}>
          Playground
        </MobileMenuLink>
        <MobileMenuLink to="contact" onClick={toggle}>
          Contact
        </MobileMenuLink>
        <MobileButton
          href={process.env.PUBLIC_URL + "/Nishant_Kumar_IITGoa_MNC.pdf"}
          download="Nishant_Kumar_IITGoa_MNC.pdf"
        >
          <span>
            <span>
              Download Resume
            </span>
          </span>
        </MobileButton>
      </MobileMenuList>
      <MobileSocials>
        <MobileSocial
          href="mailto:nishantkumar19041@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gm
        </MobileSocial>
        <MobileSocial
          href="https://github.com/nishant-19041"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gh
        </MobileSocial>

        <MobileSocial
          href="https://www.linkedin.com/in/nishant-kumar-365395193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ln
        </MobileSocial>
      </MobileSocials>
      <MobileQuote>travaille pour ça</MobileQuote>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
