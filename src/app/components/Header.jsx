import React, { Component } from "react";
import "./Header.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { Col } from "reactstrap";
import { elastic as Menu } from "react-burger-menu";

class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div>
        <Menu right>
          {/* <img
            src={require("../../img/avatar02.svg")}
            className="nav-logo"
            alt="Logo"
          /> */}
          <Link
            className="link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            home
          </Link>
          <Link
            className="link"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
          >
            projects
          </Link>

          <Link
            className="link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
          >
            about
          </Link>

          <Link
            className="link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
          >
            contact
          </Link>

          <a
            className="link"
            href={
              "https://drive.google.com/file/d/1uqFf1V3yx1JSYUzH1VtDjlnJC_x7Psx0/view?usp=sharing"
            }
            target={"_blank"}
          >
            currículo
          </a>
          <a
            href={
              "https://www.linkedin.com/in/carolina-guido-monteiro/?locale=es_ES"
            }
            target={"_blank"}
          >
            <img
              src={require("../../img/linkedin.svg")}
              className="icon-menu"
              alt="icon"
            />
          </a>
          <a href={"https://github.com/carolgmonteiro"} target={"_blank"}>
            <img
              src={require("../../img/github_1.svg")}
              className="icon-menu"
              alt="icon"
            />
          </a>
        </Menu>
      </div>
    );
  }
}

export default Header;
