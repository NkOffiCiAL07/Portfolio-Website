import React from "react";
import {
  ExperienceContent,
  StyledExperience,
} from "../styles/Experience.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./Experience.style.css"

const Experience = () => {
  const sectionRef = useScrollReveal();

  return (
    <StyledExperience id="experience" ref={sectionRef}>
      <SectionHeading dark="true" mb="3rem" data-reveal>
        <SectionTitle dark="true" number="02">
          Experience
        </SectionTitle>
      </SectionHeading>
    
      <ExperienceContent>
        <div className="ExperienceBody">
          <div className="ExperienceSection">
            <div className="ExperienceContainer"></div>
            <div className="ExperienceContainerItem" data-reveal data-reveal-delay="1">
              <div className="ExperienceHeading">
                <h2> Senior Member of Technical Staff — Siemens EDA <span className="ExperienceDuration"> [ Jan 2024 - Present ] [ Noida ] </span></h2>
              </div>
              <div className="ExperienceContent">
              <ul>
                <li> - Optimizing HDL Editing workflows within Tessent DFT toolchain, focusing on high-performance RTL parsing and elaboration for massive-scale designs.</li>
                <li> - Resolved 50+ critical bugs involving HIE (Hierarchical Instance Expansion), structs, and complex signal connectivity in Verilog/VHDL.</li>
                <li> - Automated RTL view validation across multiple synthesis streams, reducing manual verification time by 20%.</li>
                <li> - Improved C++ memory efficiency and execution speed in HDLE modules by refactoring data structures and algorithms.</li>
                <li> - Enhanced critical elaboration stages including type resolution, width computation, and assign de-compilation, ensuring 100% tool accuracy.</li>
              </ul>
              </div>
            </div>
              <div className="ExperienceContainer"></div>
          </div>
          <div className="ExperienceBorder"></div>
          <div className="ExperienceSection">
            <div className="ExperienceContainerItem" data-reveal data-reveal-delay="2">
              <div className="ExperienceHeading">
              <h2>Data Scientist — Turtlemint <span className="ExperienceDuration"> [ Jul 2023 - Jan 2024 ] [ Pune ]</span></h2>
              </div>
              <div className="ExperienceContent">
              <ul>
                <li> - Engineered end-to-end machine learning pipelines in Python, improving data cleaning speed by 15% via modular preprocessing scripts.</li>
                <li> - Segmented 10,000+ POSPs using K-means clustering, enabling targeted advertising that lowered acquisition costs.</li>
                <li> - Processed and analyzed large-scale datasets using PySpark and AWS (S3/EC2), facilitating data-driven decision making.</li>
                <li> - Conducted A/B testing on marketing models to validate feature importance and model scalability.</li>
              </ul>
              </div>
            </div>
            <div className="ExperienceContainer"></div>
            <div className="ExperienceContainerItem" data-reveal data-reveal-delay="3">
            <div className="ExperienceHeading">
            <h2> Summer Intern — Siemens EDA <span className="ExperienceDuration"> [ Jun 2022 - Dec 2022 ] [ Noida ] </span></h2>
            </div>
            <div className="ExperienceContent">
            <ul>
                <li> - Scaled debug infrastructure by developing TCL scripts for automated validation of modification commands.</li>
                <li> - Leveraged GDB and Linux tools to perform deep-dive debugging of Object-Oriented C++ codebases.</li>
                <li> - Documented system architecture and test coverage, identifying edge cases in netlist modification features.</li>
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
