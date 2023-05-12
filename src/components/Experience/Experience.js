import React from "react";
// import { RiFontSize } from "react-icons/ri";
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
                <h2> NxtWave <span className="ExperienceDuration"> [ Jun 2021 - July 2021 ] [ Hyderabad ] </span></h2>
              </div>
              <div className="ExperienceContent">
              <ul>
                <li> - Built various mini-projects using Machine Learning algorithms.</li>
                <li> - Debugged a few ML algorithms and learnt Ensembling techniques to combine different algorithms.</li>
                <li> - Learned multiple new algorithms and solved Machine Learning problems using Python.</li>
                <li> - Analysed relevant data, estimated and derived results.</li>
              </ul>
              </div>
            </div>
              <div className="ExperienceContainer"></div>
          </div>
          <div className="ExperienceBorder"></div>
          <div className="ExperienceSection">
            <div className="ExperienceContainerItem">
              <div className="ExperienceHeading">
              <h2>Siemens EDA <span className="ExperienceDuration"> [ June 2022 - Dec 2022 ] [ Noida ]</span></h2>
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
            <h2> COVID-19 <span className="ExperienceDuration"> [ Apr 2020 - May 2020 ] [ IIT Goa ] </span></h2>
            </div>
            <div className="ExperienceContent">
            <ul>
                <li> - The main goal is to understand the basics of Epidemiology, its complexity and appreciate its complexity.</li>
                <li> - Using Mathematical modelling and Coding, I tried to fit the COVID-19 data of Punjab, India, into a compartment model, SIR.
</li>
                <li> - Helps to understand, analyse, forecast, and estimate the prevailing Biological phenomena of the COVID-19 Epidemic.
</li>
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
