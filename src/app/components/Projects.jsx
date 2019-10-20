import React from "react";
import "./Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects" id="projects">
        <div className="projects-content">
          <h3>Proyectos</h3>
          <div className="icons-container">
            <img
              src={require("../../img/pinterest.svg")}
              className="icon-project"
              alt="icon"
            />
            <img
              src={require("../../img/burgerqueen.svg")}
              className="icon-project"
              alt="icon"
            />
            <img
              src={require("../../img/mdlinks.svg")}
              className="icon-project"
              alt="icon"
            />
            <img
              src={require("../../img/migrame.svg")}
              className="icon-project"
              alt="icon"
            />
            <img
              src={require("../../img/viewnow.svg")}
              className="icon-project"
              alt="icon"
            />
            <img
              src={require("../../img/poketmon.svg")}
              className="icon-project"
              alt="icon"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
