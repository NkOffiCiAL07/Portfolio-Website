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
              <div className="ExperienceHeading">
                <h2>TruBeat <span className="ExperienceDuration"> [ Jan 2023 - feb 2023 ] </span></h2>
              </div>
              <div className="ExperienceContent">
              <ul>
                <li> - Building a music web application from scratch using HTML, CSS and React Js.</li>
                <li> - Implementing responsive design to ensure optimal performance and user experience.</li>
                <li> - Deployed it on Netlify to make it live and avail it for testing.</li>
              </ul>
              </div>
            </div>
              <div className="ExperienceContainer"></div>
          </div>
          <div className="ExperienceBorder"></div>
          <div className="ExperienceSection">
            <div className="ExperienceContainerItem">
              <div className="ExperienceHeading">
              <h2>Siemens EDA <span className="ExperienceDuration"> [ June 2022 - Dec 2022 ] </span></h2>
              </div>
              <div className="ExperienceContent">
              <ul>
                <li> - Tested code for enhancing debug infrastructure using DFT tools.</li>
                <li> - Wrote test-cases of TCL commands for verifying features of modification commands.</li>
                <li> - Logged in HDLE API using C++ to get more insights on client's calls.</li>
                <li> - Used Linux and gdb for managing and debugging c++ files.</li>
                <li> - Implemented Oops concepts extensively in c++ to override different methods.</li>
              </ul>
              </div>
            </div>
            <div className="ExperienceContainer"></div>
            <div className="ExperienceContainerItem">
            <div className="ExperienceHeading">
            <h2>HousePredApp <span className="ExperienceDuration"> [ Sept 2022 - Oct 2022 ] </span></h2>
            </div>
            <div className="ExperienceContent">
            <ul>
                <li> - Developed two advanced regression models such as Ridge and Lasso, to predict the house prices.</li>
                <li> - Trained the model using the Ames Housing dataset from Kaggle and achieved an accuracy of 89%.</li>
                <li> - Made an end-to-end flask web application and deployed it to Heroku.</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </ExperienceContent>
    </StyledExperience>
  );
};

export default Experience;
