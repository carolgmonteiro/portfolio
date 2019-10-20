import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="image-container">
          <img
            src={require("../../img/icon-carol_01.svg")}
            className="about-icon"
            alt="about"
          />
        </div>
        <div className="about-content">
          <h1>Hola mundo!</h1>
          <p>
            Desarrolladora front-end con experiencia en diseño de interface. Mi
            motivación es aprender constantemente, desarrollar trabajos en
            equipo y transmitir conceptos complejos por medio del diseño.
            Ingressé al mercado de desarrollo tecnológico con el objetivo de
            ayudar a crear herramientas accesibles que mejoren la comunicación
            entre las personas. Mi objetivo es contribuir en una posición
            profesional donde pueda participar no solo de la construcción de
            aplicaciones y herramientas más diversas, amplias e incluyentes como
            también del proceso de transformación digital de organizaciones en
            general.
          </p>
        </div>
        <div>
          <button>
            <p>Mi CV</p>
          </button>
        </div>
        <div className="skills-content">
          <div className="icons-container">
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
                  />{" "}
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
