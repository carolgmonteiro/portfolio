import React from "react";
import "./About.css";
import Slide from "react-reveal/Slide";
import "./About-animation.scss";

class About extends React.Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="image-container">
          <Slide top>
            <img
              src={require("../../img/programming.svg")}
              className="about-icon"
              alt="about"
            />{" "}
          </Slide>
        </div>

        <div className="about-content">
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
                </ul>
              </div>
            </div>
          </div>
          <div className="about-text">
            <p>
              I am a front-end developer with experience in interface design. My
              motivation is to constantly learn, develop teamwork and transmit
              complex concepts through design. I am ingressing to the
              technological development market with the aim to help create
              accessible tools that improve communication between people.
              {/* Soy desarrolladora front-end con experiencia en diseño de interface.
            Mi motiva aprender constantemente, desarrollar trabajos en equipo y
            transmitir conceptos complejos por medio del diseño. Estoy
            ingressando al mercado de desarrollo tecnológico con el objetivo de
            ayudar a crear herramientas accesibles que mejoren la comunicación
            entre las personas. */}
            </p>
            <p>
              I speak <strong>native Portuguese</strong>,{" "}
              <strong>advanced English</strong> and{" "}
              <strong>advanced Spanish</strong>.
            </p>
            {/* Hablo portugués nativo, inglés avanzado y español avanzado */}
            <br />
          </div>
          <div className="education">
            {/* <h3>Educación</h3>
            <h5>Mayo-Deciembre 2019 . Bootcamp Laboratoria Chile</h5>
            <p>
              Bootcamp intensivo de duración de 6 meses estudiando desarrollo
              web front-end (Javascript)con enfoque en user Interface (UI) |
              User Experience (UX) | metodologias agiles.
            </p>
            <br />
            <h5>2014-2016 . Universidade de Sao Paulo. Brasil</h5>
            <p>Diplomado en Planificación y Gestión de Ciudades.</p>
            <br />
            <h5>
              2003-2008 . Universidade Presbiteriana Mackenzie Sao Paulo. Brasil
            </h5>
            <p>Graduación Facultad de Arquitectura y Urbanismo.</p> */}
            <h5>For further details download my curriculum</h5>
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
            <h3>Skills</h3>
            <div>
              <div>
                <a
                  className="icons"
                  href={"https://www.javascript.com/about"}
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/js.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>
                <a
                  className="icons"
                  href={
                    "https://developer.mozilla.org/es/docs/HTML/HTML5/Introducci%C3%B3n_a_HTML5"
                  }
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/html5.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>
                <a
                  className="icons"
                  href={"https://developer.mozilla.org/es/docs/Archive/CSS3"}
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/css3.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>
                <a
                  className="icons"
                  href={"https://reactjs.org/"}
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/react.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>

                <a
                  className="icons"
                  href={"https://firebase.google.com/docs"}
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/firebase.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>
                <a
                  className="icons"
                  href={"https://nodejs.org/en/about/"}
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/nodejs.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>
                <a
                  className="icons"
                  href={"https://github.com/about"}
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/github.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>
                <a
                  className="icons"
                  href={"https://git-scm.com/"}
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/git.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>

                <a
                  className="icons"
                  href={"https://jestjs.io/"}
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/jest.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>
                <a
                  className="icons"
                  href={"https://balsamiq.com/"}
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/balsamiq.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>
                <a
                  className="icons"
                  href={"https://www.figma.com/"}
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/figma.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>
                <a
                  className="icons"
                  href={"https://www.adobe.com/la/products/xd/details.html"}
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/xd.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>
                <a
                  className="icons"
                  href={
                    "https://helpx.adobe.com/illustrator/how-to/what-is-illustrator.html"
                  }
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/illustrator.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>
                <a
                  className="icons"
                  href={"https://helpx.adobe.com/support/photoshop.html"}
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/photoshop.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>
                <a
                  className="icons"
                  href={"https://www.adobe.com/pt/products/indesign.html"}
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/indesign.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>
                <a
                  className="icons"
                  href={"https://getbootstrap.com/"}
                  target={"_blank"}
                >
                  <img
                    src={require("../../img/bootstrap.svg")}
                    className="icon"
                    alt="icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
