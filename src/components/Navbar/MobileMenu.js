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
          href="nishantkumar19041@gmail.com "
          target="_blank"
          rel="Nishant Kumar"
        >
          <span>
            <span>
              get in touch
            </span>
          </span>
        </MobileButton>
      </MobileMenuList>
      <MobileSocials>
        <MobileSocial
          href="nishantkumar19041@gmail.com"
          target="_blank"
          rel="Nishant Kumar"
        >
          Gm
        </MobileSocial>
        <MobileSocial
          href="https://github.com/nishant-19041"
          target="_blank"
          rel="Nishant Kumar"
        >
          Gh
        </MobileSocial>

        <MobileSocial
          href="https://www.linkedin.com/in/nishant-kumar-365395193/"
          target="_blank"
          rel="Nishant Kumar"
        >
          ln
        </MobileSocial>
      </MobileSocials>
      <MobileQuote>travaille pour ça</MobileQuote>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
