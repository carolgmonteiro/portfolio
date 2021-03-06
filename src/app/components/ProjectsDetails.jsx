import React, { PureComponent } from "react";
import "./ProjectsDetails.css";
import AOS from "aos";
import "aos/dist/aos.css";

class ProjectsDetails extends PureComponent {
  render() {
    AOS.init();
    return (
      <ul className="grid">
        <li
          className="button-content"
          data-aos="fade-up"
          data-aos-delay="10"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <figure>
            <img
              src={require("../../img/sodimac.svg")}
              className="icon-project"
              alt="icon"
            />
            <figcaption>
              <h3>Sodimac Conductor</h3>
              <span>January 2020</span>
              <hr />
              <p>
                App focused on Sodimac drivers to improve communication between
                suppliers and Sodimac with more frequent updates on delivery
                status.
              </p>
              <label>
                <img src={require("../../img/tools.svg")} alt="icon" />
                <p>Figma, React JS, HTML5, CSS3, Javascript, Mongo DB.</p>
              </label>

              <a
                href={"https://sodimac-conductor.herokuapp.com/"}
                target={"_blank"}
              >
                Demo
              </a>
              <a
                href={"https://github.com/carolgmonteiro/sodimac-app-conductor"}
                target={"_blank"}
              >
                Code
              </a>
            </figcaption>
          </figure>
        </li>
        <li
          className="button-content"
          data-aos="fade-up"
          data-aos-delay="10"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <figure>
            <img
              src={require("../../img/pinterest.svg")}
              className="icon-project"
              alt="icon"
            />
            <figcaption>
              {/* <button className="btn-close-figcaption">
                <img src={require("../../img/cancel.svg")} alt="close" />
              </button> */}
              <h3>Pinterest</h3>
              <span>November 2019</span>
              <hr />
              <p>
                Using the Pixabay API, I recreated the replica of the Pinterest
                homepage.
              </p>
              <label>
                <img src={require("../../img/tools.svg")} alt="icon" />
                <p>
                  Javascript, HTML5, CSS3, React JS, Adobe XD, Balsamiq,
                  libraries and Pixabay api.
                </p>
              </label>
              <a
                href={"https://carolgmonteiro.github.io/desafio_pinterest/"}
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
          {/* </a> */}
        </li>
        <li
          className="button-content"
          data-aos="fade-up"
          data-aos-delay="30"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <figure>
            <img
              src={require("../../img/burgerqueen.svg")}
              className="icon-project"
              alt="icon"
            />
            <figcaption>
              <h3>Burger Queen</h3>
              <span>October 2019</span>
              <hr />
              <p>
                It is an interface designed for restaurants, which allows an
                easier service flow to the customer.
              </p>
              <label>
                <img src={require("../../img/tools.svg")} alt="icon" />
                <p>
                  Javascript, HTML5, CSS3, React JS, Adobe XD, firebase,
                  bootstrap.
                </p>
              </label>

              <a
                href={
                  "https://carolgmonteiro.github.io/SCL010-Burger-Queen-V02/"
                }
                target={"_blank"}
              >
                Demo
              </a>
              <a
                href={
                  "https://github.com/carolgmonteiro/SCL010-Burger-Queen-V02"
                }
                target={"_blank"}
              >
                Code
              </a>
            </figcaption>
          </figure>
        </li>

        {/* <li
          className="button-content"
          data-aos="fade-up"
          data-aos-delay="10"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <figure>
            <img
              src={require("../../img/mdlinks.svg")}
              className="icon-project"
              alt="icon"
            />
            <figcaption>
              <h3>MD.Links</h3>
              <span>September 2019</span>
              <hr />
              <p>
                Library created using Node.js, which reads and analyzes files in
                Markdown format.
              </p>
              <label>
                <img src={require("../../img/tools.svg")} alt="icon" />
                <p>
                  Javascript, Node js, libraries, jest, Adobe XD, Balsamiq,
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
        </li> */}
        <li
          className="button-content"
          data-aos="fade-up"
          data-aos-delay="10"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
        >
          <figure>
            <img
              src={require("../../img/migrame.svg")}
              className="icon-project"
              alt="icon"
            />
            <figcaption>
              <h3>Migra.me</h3>
              <span>August 2019</span>
              <hr />
              <p>
                An immigrant-focused SPA web application that helps them find
                organized information like housing and visa of the new country.
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
                  "https://daniela-quintana.github.io/SCL010-Social-Network/src/#/home"
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
        <li
          className="button-content"
          data-aos="fade-up"
          data-aos-delay="10"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
        >
          <figure>
            <img
              src={require("../../img/viewnow.svg")}
              className="icon-project"
              alt="icon"
            />
            <figcaption>
              <h3>ViewNow!</h3>
              <span>July 2019</span>
              <hr />
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
        <li
          className="button-content"
          data-aos="fade-up"
          data-aos-delay="10"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="3000"
        >
          <figure>
            <img
              src={require("../../img/poketmon.svg")}
              className="icon-project"
              alt="icon"
            />
            <figcaption>
              <h3>PoketMon</h3>
              <span>July 2019</span>
              <hr />
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
