import React, { PureComponent } from "react";
import "./ProjectsDetails.css";

class ProjectsDetails extends PureComponent {
  render() {
    return (
      <ul className="grid">
        <li>
          <figure>
            <img
              src={require("../../img/pinterest.svg")}
              className="icon-project"
              alt="icon"
            />
            <figcaption>
              <h3>Pinterest</h3>
              <span>October 2019</span>
              <p>
                Given a set of image urls (api), I recreated the design of the
                pinterest Home page.
              </p>
              <label>
                <img src={require("../../img/tools.svg")} alt="icon" />
                <p>React JS, Adobe XD, Balsamiq, libraries and api Pixabay.</p>
              </label>
              <a
                href={
                  "https://drive.google.com/file/d/1BhVSghST2Sse70PQ6WfoAtNmNZwz5Xok/view?usp=sharing"
                }
                target={"_blank"}
              >
                Demo
              </a>
              <a
                href={"https://github.com/carolgmonteiro/desafio_pinterest"}
                target={"_blank"}
              >
                Code
              </a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img
              src={require("../../img/burgerqueen.svg")}
              className="icon-project"
              alt="icon"
            />
            <figcaption>
              <h3>BurgerQueen</h3>
              <span>September 2019</span>
              <p>
                It is an interface designed for restaurants, which allows an
                easier service flow to the customer.
              </p>
              <label>
                <img src={require("../../img/tools.svg")} alt="icon" />
                <p>React JS, Adobe XD, firebase, bootstrap.</p>
              </label>

              <a
                href={"https://adrievelyn.github.io/SCL010-Burger-Queen/"}
                target={"_blank"}
              >
                Demo
              </a>
              <a
                href={"https://github.com/adrievelyn/SCL010-Burger-Queen"}
                target={"_blank"}
              >
                Code
              </a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img
              src={require("../../img/mdlinks.svg")}
              className="icon-project"
              alt="icon"
            />
            <figcaption>
              <h3>MD.Links</h3>
              <span>August 2019</span>
              <p>
                Library created using Node.js that reads and analyzes files in
                Markdown format.
              </p>
              <label>
                <img src={require("../../img/tools.svg")} alt="icon" />
                <p>
                  Javascript, Node js, librerias, jest, Adobe XD, Balsamiq,
                  loom.
                </p>
              </label>

              <a
                href={
                  "https://www.npmjs.com/package/@carolgmonteiro/md-links?activeTab=dependencies"
                }
                target={"_blank"}
              >
                Npm
              </a>
              <a
                href={"https://github.com/carolgmonteiro/SCL010-md-links"}
                target={"_blank"}
              >
                Code
              </a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img
              src={require("../../img/migrame.svg")}
              className="icon-project"
              alt="icon"
            />
            <figcaption>
              <h3>Migra.me</h3>
              <span>September 2019</span>
              <p>
                SPA web app focused on immigrants for searching information
                about new country home.
              </p>
              <label>
                <img src={require("../../img/tools.svg")} alt="icon" />
                <p>
                  HTML5, CSS3, Javascript, firebase, jest, Adobe XD, Balsamiq,
                  loom.
                </p>
              </label>
              <a
                href={
                  "https://dacoquima.github.io/SCL010-Social-Network/src/#/home"
                }
                target={"_blank"}
              >
                Demo
              </a>
              <a
                href={"https://github.com/carolgmonteiro/SCL010-Social-Network"}
                target={"_blank"}
              >
                Code
              </a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img
              src={require("../../img/viewnow.svg")}
              className="icon-project"
              alt="icon"
            />
            <figcaption>
              <h3>ViewNow!</h3>
              <span>July 2019</span>
              <p>
                Inclusive web design for people with color blindness, that
                filter and recommends movies based on mood and availability.
              </p>
              <label>
                <img src={require("../../img/tools.svg")} alt="icon" />
                <p>HTML5, CSS3, Javascript, Figma, Balsamiq, Color Oracle</p>
              </label>
              <a
                href={
                  "https://carolgmonteiro.github.io/SCL010-hackathon-peliculas/src/index.html"
                }
                target={"_blank"}
              >
                Demo
              </a>
              <a
                href={
                  "https://github.com/carolgmonteiro/SCL010-hackathon-peliculas"
                }
                target={"_blank"}
              >
                Code
              </a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img
              src={require("../../img/poketmon.svg")}
              className="icon-project"
              alt="icon"
            />
            <figcaption>
              <h3>PoketMon</h3>
              <span>July 2019</span>
              <p>
                Pokemon Kanto generation platform to obtain basic information
                such as names, numbers, eggs.
              </p>
              <label>
                <img src={require("../../img/tools.svg")} alt="icon" />

                <p>HTML5, CSS3, Javascript, Figma, Balsamiq.</p>
              </label>
              <a
                href={
                  "https://carolgmonteiro.github.io/SCL010-data-lovers/src/index.html"
                }
                target={"_blank"}
              >
                Demo
              </a>
              <a
                href={"https://github.com/carolgmonteiro/SCL010-data-lovers"}
                target={"_blank"}
              >
                Code
              </a>
            </figcaption>
          </figure>
        </li>
      </ul>
    );
  }
}

export default ProjectsDetails;
