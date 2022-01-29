import React from "react";
import { ContainerStyled } from "../StyledComponents/ContainerStyled";

function About() {
  return (
    <ContainerStyled>
      <div className="m-5">
        <h3>
          Capstone project by <strong>Melisa Deniz</strong>.
        </h3>

        <h4>Technologies</h4>
        <ul>
          <li>React</li>
          <li>React-Router-DOM</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>Redux</li>
        </ul>
      </div>
    </ContainerStyled>
  );
}

export default About;
