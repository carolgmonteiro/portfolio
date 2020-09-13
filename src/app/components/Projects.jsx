import React from "react";
import "./Projects.css";
import ProjectsDetails from "./ProjectsDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About-animation.scss";
// import { Col } from "reactstrap";

class Projects extends React.Component {
  render() {
    AOS.init();
    return (
      <div className="projects" id="projects">
        <div className="col-lg-8 col-md-10 col-xs-12 projects-content">
          <div
            className="hello-content"
            data-aos="fade-down"
            data-aos-delay="10"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="3000"
          >
            <div className="content">
              <div className="content__container">
                <p className="content__container__text">I make digital</p>
                <ul className="content__container__list">
                  <li className="content__container__list__item">projects</li>

                  <li className="content__container__list__item">
                    experiences
                  </li>
                  <li className="content__container__list__item">
                    interactions
                  </li>
                  <li className="content__container__list__item">products</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid">
            <ProjectsDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
