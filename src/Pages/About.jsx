import React from "react";
import { ContainerStyled } from "../styledComponents/ContainerStyled";

function About() {
  return (
    <ContainerStyled>
      <div className="m-5">
        <h4> In this project, a Movie App was built by <strong>Melisa Deniz</strong> by taking data from a real API.</h4>

       <h5> <b>Used technologies :</b> </h5>

        <ul>
          <li>React</li>
          <li>React-Router-DOM</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>Redux</li>
          <li>Styled Components </li>
         
        </ul>
      </div>
    </ContainerStyled>
  );
}

export default About;
