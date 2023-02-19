import React from "react";
import { RiFontSize } from "react-icons/ri";
import {
  ExperienceContent,
  // AboutDetailsContainer,
  // AboutImage,
  // AboutImageContainer,
  // Resume,
  // ResumeLink,
  StyledExperience,
} from "../styles/Experience.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
// import { StyledParagraph } from "../styles/Typography.styled";
// import myImage from "../../assets/1.jpg";
// import downloadIcon from "../../assets/icons/download-icon.svg";
// import resume from "../../assets/resume.pdf";
import "./Experience.style.css"

const Experience = () => {
  return (
    <StyledExperience id="experience">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          Experience
        </SectionTitle>
      </SectionHeading>
    
      <ExperienceContent>
        <div className="ExperienceBody">
          <div className="ExperienceSection">
            <div className="ExperienceContainer"></div>
            <div className="ExperienceContainerItem">
              <h2>Portfolio Website- <span className="ExperienceDuration"> [ Feb 2023 ] </span></h2>
              I recently designed and developed a portfolio website from scratch using HTML, CSS, and React Js. 
              The website showcases my previous work, skills, and achievements in a visually appealing and 
              easy-to-navigate manner. I spent several weeks carefully selecting and organizing the content, 
              as well as fine-tuning the design and functionality to ensure a seamless user experience. 
              Overall, I am excited to share my portfolio with potential clients and 
              employers.
            </div>
              <div className="ExperienceContainer"></div>
          </div>
          <div className="ExperienceBorder"></div>
          <div className="ExperienceSection">
            <div className="ExperienceContainerItem">
              <h2>Siemens EDA - <span className="ExperienceDuration"> [ June 2022 - Dec 2022 ] </span></h2>
              During my 6-month internship at Siemens EDA, I had the opportunity to work on developing 
              and implementing software solutions in a professional environment. In particular, I worked on 
              enhancing the debug infrastructure using DFT tools, which involved testing code and writing test 
              cases of TCL commands to verify features of modification commands. To gain more insights into the 
              client's calls, I also logged in to API using C++. Additionally, I used Linux and gdb to manage and 
              debug C++ code.
            </div>
            <div className="ExperienceContainer"></div>
            <div className="ExperienceContainerItem">
            <h2>HousePredApp - <span className="ExperienceDuration"> [ Sept 2022 - Oct 2022 ] </span></h2>
            Developed two advanced regression models such as Ridge and Lasso, to predict the house prices and 
            trained the model using the Ames Housing dataset from Kaggle and achieved an accuracy of 89%.
            This is an end-to-end flask web application and which I deployed it to Heroku.
            </div>
          </div>
        </div>
      </ExperienceContent>
    </StyledExperience>
  );
};

export default Experience;
