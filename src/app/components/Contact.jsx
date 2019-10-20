import React from "react";
import "./Contact.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact" id="contact">
        <div className="contact-content">
          <h1>Say hello!</h1>
          <p>+56 9 5977-6124 </p>
          <p>carolgmonteiro@live.com</p>
        </div>

        <div className="icons-container">
          <a
            href={
              "https://www.linkedin.com/in/carolina-guido-monteiro/?locale=es_ES"
            }
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
    );
  }
}

export default Contact;
