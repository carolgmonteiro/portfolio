import React from "react";
import "./Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects" id="projects">
        <div className="projects-content">
          <h3>Projects</h3>
          <div className="icons-container">
            <img
              src={require("../../img/proj-burgerqueen.PNG")}
              className="icon-project"
              alt="icon"
            />
            <img
              src={require("../../img/proj-social network.PNG")}
              className="icon-project"
              alt="icon"
            />
            <img
              src={require("../../img/proj-viewnow.PNG")}
              className="icon-project"
              alt="icon"
            />
            <img
              src={require("../../img/proj-pokemon.PNG")}
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
