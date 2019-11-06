import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import "./About-animation.scss";
import "./Button.scss";
import AOS from "aos";
import "aos/dist/aos.css";
// import Header from "../components/Header";
// import Fade from "react-reveal/Fade";

import { Link, animateScroll as scroll } from "react-scroll";
// import { Col } from "reactstrap";
class Home extends React.Component {
  render() {
    AOS.init();
    return (
      <div className="home" id="home">
        <div className="home-content">
          <div
            className="button-content"
            data-aos="zoom-out"
            data-aos-delay="10"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="3000"
          >
            <Link
              className="btn"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <img
                src={require("../../img/avatar05.svg")}
                className="btn-icon"
                alt="about"
              />
              {/* <p>Find it out!</p> */}
            </Link>
          </div>
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
                  <li className="content__container__list__item">products</li>
                  <li className="content__container__list__item">projects</li>
                </ul>
              </div>
            </div>
          </div>
          <section id="section05" className="demo">
            <a href="#projects">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
