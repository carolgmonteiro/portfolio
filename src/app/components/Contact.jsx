import React from "react";
import "./Contact.css";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact p-4" id="contact">
        <div className="contact-content col-12 m-4 p-4">
          <h1
            data-aos="zoom-in-right"
            data-aos-delay="10"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          >
            Say hello!
          </h1>
          <br />
          <div className="col-12 contact-info">
            <p
              data-aos="fade-up"
              data-aos-delay="10"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1500"
            >
              <strong>Let´s talk about new ideas over some coffee!</strong>
            </p>
            <br />
            <label
              className="icon-small"
              data-aos="fade-up"
              data-aos-delay="10"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              <img src={require("../../img/e-mail.svg")} alt="icon" />
              <p>+56 9 5977-6124 </p>
            </label>

            <label
              className="icon-small"
              data-aos="fade-up"
              data-aos-delay="10"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              <img src={require("../../img/whatsapp.svg")} alt="icon" />
              <p>carolgmonteiro@live.com</p>
            </label>
          </div>
        </div>
        <div
          className="icons-follow-me"
          data-aos="fade-up"
          data-aos-delay="10"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2500"
        >
          <h3 className="text-center">Follow me</h3>
          <div className="icons-follow-me d-flex justify-content-center align-items-center">
            <a
              href={
                "https://www.linkedin.com/in/carolina-guido-monteiro/?locale=es_ES"
              }
              target={"_blank"}
            >
              <img
                src={require("../../img/linkedin.svg")}
                className="icon"
                alt="icon"
              />
            </a>
            <a href={"https://github.com/carolgmonteiro"} target={"_blank"}>
              <img
                src={require("../../img/github_1.svg")}
                className="icon"
                alt="icon"
              />
            </a>
            <a
              href={
                "https://app.talento.laboratoria.la/profile/PYBmdj6dR3WiP5ajTTd2WJ9WhE03"
              }
              target={"_blank"}
            >
              <img
                src={require("../../img/laboratoria.svg")}
                className="icon"
                alt="icon"
                target={"_blank"}
              />
            </a>
            <a
              href={
                "https://issuu.com/carolinaguido/docs/_sketchbook_carolina_guido_jan17"
              }
              target={"_blank"}
            >
              <img
                src={require("../../img/design.svg")}
                className="icon"
                alt="icon"
                target={"_blank"}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
