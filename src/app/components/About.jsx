import React from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

class About extends React.Component {
  render() {
    AOS.init();
    return (
      <div className="about" id="about">
        <div
          className="image-container"
          data-aos="zoom-out"
          data-aos-delay="10"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <img
            src={require("../../img/programming-01.svg")}
            className="about-icon"
            alt="about"
          />
        </div>
        <div className="about-content">
          <h1
            data-aos="zoom-in-right"
            data-aos-delay="10"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
          >
            About me
          </h1>
          <div
            className="about-text"
            data-aos="fade-up"
            data-aos-delay="10"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
          >
            <p>
              I am a brasilian web-designer/front-end developer based in
              Santiago, Chile.
            </p>
            <p>
              My motivation is constantly keep learning, developping teamwork
              and transmit complex concepts through design.
            </p>
            <p>
              Started my journey in programming, redirecting my professional
              career originally as an architect/urban designer, and I found a
              way to develop creativity and self-learning creating solutions.
            </p>
            <p>
              I am ingressing to the technological development market with the
              aim to help create accessible tools that improve communication
              between people.
            </p>
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
            {/* Hablo portugués nativo, inglés avanzado y español avanzado */}
            <br />
          </div>
          <div
            className="education"
            data-aos="fade-up"
            data-aos-delay="10"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
          >
            <h5>For further details take a look on my curriculum</h5>
            <a
              href={
                "https://drive.google.com/file/d/1BhVSghST2Sse70PQ6WfoAtNmNZwz5Xok/view?usp=sharing"
              }
              target={"_blank"}
            >
              <img
                src={require("../../img/cv.svg")}
                className="icon-cv"
                alt="icon"
              />
            </a>
          </div>
          <br />
          <hr />
        </div>

        <div className="skills-content">
          <div className="icons-container-skills">
            <h1
              data-aos="zoom-in-right"
              data-aos-delay="10"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="3000"
            >
              Skills & Experience
            </h1>
            <div>
              <p>
                The main area of my expertise is front-end development (client
                side of the web) with experience in interface design and agile
                methods.
              </p>
              <p>
                HTML5, CSS3, JS, node js, firebase building small web projects
                with React js, custom features, animations and coding
                interactive and inclusive layouts. Illustrator, Adobe XD and
                Balsamiq are my day-by-day tools for prototyping.
              </p>
              <p>
                I have also experience with illustration and 3D modeling, user
                experience (UX) with Design thinking tools like research, user
                interview, co-creating and sketching.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="10"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="3000"
            >
              <div>
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

                <img
                  src={require("../../img/jest.svg")}
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
    );
  }
}

export default About;
