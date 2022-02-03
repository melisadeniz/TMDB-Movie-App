import React from "react";
import { ContainerStyled } from "../styledComponents/ContainerStyled";

function About() {
  return (
    <ContainerStyled>
      <div className="m-5">
        <h5> In this Capstone Project given at "UP School Frontend Development Program", a Movie App was built by <strong>Melisa Deniz</strong> by taking data from <a href="https://developers.themoviedb.org/4/getting-started/authorization">The Movie Database API</a>.</h5>

        <h5><u>Login Informations:</u></h5>    
      <ul>
        <li>username: "melisadeniz"</li>
        <li>password: "password"</li>
      </ul>

       <h5> <u>Used Technologies:</u> </h5>

        <ul>
          <li>React</li>
          <li>React-Router-DOM</li>
          <li>Redux</li>
          <li>Styled Components </li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </ContainerStyled>
  );
}

export default About;
