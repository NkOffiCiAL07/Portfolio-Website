import React, { useEffect } from "react";
import {
    PlaygroundProjectContainer,
    StyledPlayground,
} from "../styles/Playground.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import PlaygroundProjectComponent from "./PlaygroundProject";
import { projectsData } from "./data";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./Playground.css"

const Playground = () => {
  let today = new Date();
  const Birthday = new Date("2023-09-07");
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  const [seconds, setSeconds] = React.useState(second);
  const [minutes, setMinutes] = React.useState(minute);
  const [hours, setHours] = React.useState(hour);
  const sectionRef = useScrollReveal();

  let nextBirthday = new Date(Birthday);
  nextBirthday.setFullYear(today.getFullYear());
  
  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  
  var Difference_In_Time = nextBirthday.getTime() - today.getTime();
  var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 60 * 60 * 24));
  

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
      if(seconds === 0){
        setSeconds(60);
        setMinutes(minutes => minutes - 1);

        if(minutes === 0){
          setMinutes(60);
          setHours(hours => hours - 1);
        }

        if(hours === 0){
          setHours(24);
        }
      }

    }, 1000);
    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  return (
    <StyledPlayground id="playground" ref={sectionRef}>
      <SectionHeading data-reveal>
        <SectionTitle number="04">Playground</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark="true" textAlign="center" data-reveal data-reveal-delay="1">
        A collection of projects that I've created for practice and leisure.
      </StyledParagraph>
      <PlaygroundProjectContainer>
        {projectsData.map((project) => {
          return <PlaygroundProjectComponent key={project.id} {...project} />;
        })}

        <div className="BirthDayCount">
          <h2 className="BirthDayCountHeading">Birthday Countdown</h2>
            <p>
              Day : {Difference_In_Days} ,
              Hour : {hours} , 
              Minutes : {minutes} ,
              Seconds : {seconds}
            </p>  
        </div>
        
      </PlaygroundProjectContainer>
    </StyledPlayground>
  );
};

export default Playground;
