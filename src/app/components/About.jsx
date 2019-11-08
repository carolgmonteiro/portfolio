import React from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Col } from "reactstrap";

class About extends React.Component {
  render() {
    AOS.init();
    return (
      <div className="about" id="about">
        <div className="about-container">
          <h1
            data-aos="zoom-in-right"
            data-aos-delay="10"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          >
            About me
          </h1>
          <div className="about-content">
            <div
              className="about-text"
              data-aos="fade-up"
              data-aos-delay="10"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1500"
            >
              <p>
                I am a brazilian web-designer/front-end developer based in
                Santiago, Chile.
              </p>
              {/* <p>
                My motivation is constantly keep learning, developping teamwork
                and transmit complex concepts through design.
              </p> */}
              <p>
                My motivation is constantly keep learning, developping teamwork
                and transmit complex concepts through design. I found in
                programming a way to develop my creativity and self-learning
                creating solutions combining design and logic.
              </p>
              {/* <p>
                I am ingressing to the technological development market with the
                aim to help create accessible tools that improve communication
                between people.
              </p> */}
              <p>
                My aim is to participate not only in the construction of more
                diverse, comprehensive and inclusive applications and tools but
                also of processes of digital transformation of organizations in
                general.
              </p>
              <p>
                I speak <strong>native Portuguese</strong>,{" "}
                <strong>advanced English</strong> and{" "}
                <strong>advanced Spanish</strong>.
              </p>
            </div>
            <div className="image-about-side">
              <img
                data-aos="zoom-out"
                data-aos-delay="10"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="3000"
                src={require("../../img/avatar07.svg")}
                alt="about"
              />
            </div>
          </div>
          <h2
            data-aos="zoom-in-right"
            data-aos-delay="10"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          >
            Skills & Experience
          </h2>
          {/* <hr /> */}
          <div className="skills-content">
            {/* <div className="image-container">
              <img
                data-aos="zoom-out"
                data-aos-delay="10"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="3000"
                src={require("../../img/programming-01.svg")}
                className="about-icon"
                alt="about"
              />
            </div> */}
            <div className="icons-container-skills">
              <div className="skills-text">
                <p
                  data-aos="fade-up"
                  data-aos-delay="10"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1200"
                >
                  The main area of my expertise is front-end development (client
                  side of the web) with experience in interface design and agile
                  methods.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="10"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1300"
                >
                  HTML5, CSS3, JS, node js, firebase building small web projects
                  with React js, custom features, animations and coding
                  interactive and inclusive layouts. Illustrator, Adobe XD and
                  Balsamiq are my day-by-day tools for prototyping.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="10"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1400"
                >
                  I have also experience with illustration and 3D modeling, user
                  experience (UX) with Design thinking tools like research, user
                  interview, co-creating and sketching.
                </p>
                <div className="cv">
                  <p
                    data-aos="fade-up"
                    data-aos-delay="10"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1500"
                  >
                    For further details take a look on my
                  </p>
                  <a
                    href={
                      "https://drive.google.com/file/d/1uqFf1V3yx1JSYUzH1VtDjlnJC_x7Psx0/view?usp=sharing"
                    }
                    target={"_blank"}
                  >
                    <img
                      data-aos="fade-up"
                      data-aos-delay="10"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1500"
                      src={require("../../img/cv.svg")}
                      className="icon-cv"
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
              <div className="skills-icons">
                <div
                  data-aos="fade-up"
                  data-aos-delay="10"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
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
                    src={require("../../img/react.svg")}
                    className="icon"
                    alt="icon"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="10"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2100"
                >
                  <img
                    src={require("../../img/firebase.svg")}
                    className="icon"
                    alt="icon"
                  />

                  <img
                    src={require("../../img/nodejs.svg")}
                    className="icon"
                    alt="icon"
                  />

                  <img
                    src={require("../../img/github.svg")}
                    className="icon"
                    alt="icon"
                  />

                  <img
                    src={require("../../img/git.svg")}
                    className="icon"
                    alt="icon"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="10"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2300"
                >
                  <img
                    src={require("../../img/sass.svg")}
                    className="icon"
                    alt="icon"
                  />

                  <img
                    src={require("../../img/balsamiq.svg")}
                    className="icon"
                    alt="icon"
                  />

                  <img
                    src={require("../../img/figma.svg")}
                    className="icon"
                    alt="icon"
                  />

                  <img
                    src={require("../../img/xd.svg")}
                    className="icon"
                    alt="icon"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="10"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2500"
                >
                  <img
                    src={require("../../img/illustrator.svg")}
                    className="icon"
                    alt="icon"
                  />

                  <img
                    src={require("../../img/photoshop.svg")}
                    className="icon"
                    alt="icon"
                  />

                  <img
                    src={require("../../img/indesign.svg")}
                    className="icon"
                    alt="icon"
                  />

                  <img
                    src={require("../../img/bootstrap.svg")}
                    className="icon"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
