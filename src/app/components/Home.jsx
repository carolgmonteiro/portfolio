import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import "./About-animation.scss";
import "./Button.scss";
// import Header from "../components/Header";
// import Fade from "react-reveal/Fade";

import { Link, animateScroll as scroll } from "react-scroll";
import { Col } from "reactstrap";
class Home extends React.Component {
  render() {
    return (
      <div className="home" id="home">
        <div className="home-content">
          <div className="hello-content">
            <div className="content">
              <div className="content__container">
                <p className="content__container__text">Hello</p>
                <ul className="content__container__list">
                  <li className="content__container__list__item">world !</li>

                  <li className="content__container__list__item">users !</li>
                  <li className="content__container__list__item">
                    everybody !
                  </li>
                  <li className="content__container__list__item">world !</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="button-content">
            <Link
              className="btn"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <p>Find it out!</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
