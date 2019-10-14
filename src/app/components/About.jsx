import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="image-container">
          <img
            src={require("../../img/icon-carol_01.svg")}
            className="about-icon"
            alt="about"
          />
        </div>
        <div className="about-content">
          <h1>Hello world!</h1>
          <p>
            Mi motivación es aprender constantemente, desarrollar trabajos en
            equipo y transmitir conceptos complejos por medio del diseño. Mi
            objetivo es ayudar a crear aplicaciones y herramientas más diversas,
            amplias e incluyentes como también del proceso de transformación
            digital de organizaciones en general.
          </p>
        </div>
        <div className="skills-content">
          <h3>Competencias Front-end</h3>
          <div className="icons-container">
            <img
              src={require("../../img/react.svg")}
              className="icon"
              alt="icon"
            />
            <img
              src={require("../../img/js.svg")}
              className="icon"
              alt="icon"
            />
            <img
              src={require("../../img/html5.svg")}
              className="icon"
              alt="icon"
            />
            <img
              src={require("../../img/css3.svg")}
              className="icon"
              alt="icon"
            />
            <img
              src={require("../../img/github.svg")}
              className="icon"
              alt="icon"
            />
            <img
              src={require("../../img/fire.svg")}
              className="icon"
              alt="icon"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
