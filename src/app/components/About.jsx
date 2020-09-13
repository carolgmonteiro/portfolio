import React from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Typist from "react-typist";
import "./Typist.scss";

class About extends React.Component {
  render() {
    AOS.init();
    return (
      <div className="about" id="about">
        <div className="col-12 d-flex align-items-center mx-lg-4 mx-xs-0 about-container">
          <h2
            className="text-left m-4"
            data-aos="zoom-in-right"
            data-aos-delay="10"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
          >
            About me
          </h2>

          <div className="col-12 about-content">
            <div className="row">
              <div
                className="col-md-6 col-xs-12 about-text"
                data-aos="fade-up"
                data-aos-delay="10"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
              >
                <p>
                  I am a Brazilian front-end developer UX UI based in Santiago,
                  Chile. I am currently working in PlanOK, company that creates
                  software for real estate.
                </p>
                <p>
                  Proactive, with a great capacity for self-management and
                  self-learning, I am passionate about creating projects in a
                  collaborative way. I have a passion for developing my
                  creativity and self-learning by creating solutions which
                  combine design and logic.
                </p>
                <p>
                  As a developer, I create apps and web sites for multiple
                  devices using the newest techonologies available.
                </p>
                <p>
                  My aim is to participate not only in the construction of more
                  diverse, comprehensive and inclusive applications and tools
                  but also of processes of digital transformation of
                  organizations.
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
                  src={require("../../img/avatar11.svg")}
                  alt="about"
                />
              </div>
            </div>
          </div>

          <div className="col-12">
            <h3>Skills & Experience</h3>
            <div className="row skills-content">
              <div className="col-md-6 col-xs-12 icons-container-skills p-0">
                <div>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="10"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1200"
                  >
                    My main area of expertise is front-end development (client
                    side of the web) with experience in interface design and
                    agile methods.
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="10"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1300"
                  >
                    HTML5, CSS3, JS, SASS, firebase building small web projects
                    with React js and Angular 8+, custom features, animations
                    and coding interactive and inclusive layouts. Illustrator,
                    Adobe XD and Figma are my day-by-day tools for prototyping.
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="10"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1400"
                  >
                    I have also experience with illustration and 3D modeling,
                    user experience (UX) with Design thinking tools such as
                    research, user interview, co-creating and sketching.
                  </p>
                  <br />

                  <div className="cv">
                    <Typist
                      className="TypistExample-message"
                      cursor={{ hideWhenDone: true }}
                      data-aos="fade-up"
                      data-aos-delay="10"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1500"
                    >
                      <Typist.Delay ms={750} />

                      <span>
                        {" "}
                        <a
                          href={
                            "https://drive.google.com/file/d/1dmJD9GsssE4sbNtqdebqhpwwvDY18xUi/view?usp=sharing"
                          }
                          target={"_blank"}
                          className="flash"
                        >
                          Ckeck out my curriculum
                        </a>
                      </span>
                      <br />
                    </Typist>
                  </div>
                </div>
              </div>
              <div className="col-1"></div>
              <div className="col-md-5 col-xs-12 p-0 my-4 mx-0 skills-icons">
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
                    src={require("../../img/angular.svg")}
                    className="icon"
                    alt="icon"
                  />

                  <img
                    src={require("../../img/sass.svg")}
                    className="icon"
                    alt="icon"
                  />

                  <img
                    src={require("../../img/nodejs.svg")}
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
                    src={require("../../img/firebase.svg")}
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
                    src={require("../../img/bootstrap.svg")}
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
                    src={require("../../img/xd.svg")}
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
