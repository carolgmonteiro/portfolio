import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import "./About-animation.scss";
import "./Button.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Typist from "react-typist";
import "./Typist.scss";
// import Header from "../components/Header";
// import Fade from "react-reveal/Fade";

import { Link, animateScroll as scroll } from "react-scroll";
// import { Col } from "reactstrap";
class Home extends React.Component {
  state = {
    renderMsg: false
  };

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  };

  render() {
    AOS.init();
    const docs = "//github.com/carolgmonteiro";
    return (
      <div className="home" id="home">
        <div className="TypistExample">
          <Typist
            className="TypistExample-header"
            avgTypingDelay={40}
            startDelay={2000}
            onTypingDone={this.onHeaderTyped}
          >
            <h2>Hello!</h2>
            <a href="#about">I`m Carolina</a>
            <h2>Web developer</h2>
          </Typist>
          <div className="TypistExample-content">
            {this.state.renderMsg ? (
              <Typist
                className="TypistExample-message"
                cursor={{ hideWhenDone: true }}
              >
                Front End Developer
                <br />
                & Des
                <Typist.Delay ms={500} />
                enhad
                <Typist.Backspace count={5} delay={1000} />
                <Typist.Delay ms={750} />
                igner UI_UX
                <Typist.Delay ms={1250} />
                <br />
                <span>
                  {" "}
                  <a href="#projects" className="flash">
                    Take a look on my projects
                  </a>
                </span>
                <br />
                {""}
              </Typist>
            ) : null}
          </div>
        </div>
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
              // offset={-70}
              duration={500}
            >
              {" "}
              <img
                src={require("../../img/avatar06.svg")}
                className="btn-icon-home"
                alt="about"
              />
              {/* <Typist
                className="TypistExample-message-btn"
                cursor={{ hideWhenDone: true }}
              >
                <Typist.Delay ms={6000} />
                <br />
                <span>
                  {" "}
                  <a href="#projects" className="flash">
                    Take a look on my projects
                  </a>
                </span>
              </Typist> */}
              {/* <p>Find it out!</p> */}
            </Link>
          </div>
          {/* <div
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
          </div> */}
          {/* <section id="section05" className="demo">
            <a href="#projects">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </section> */}
        </div>
      </div>
    );
  }
}

export default Home;
