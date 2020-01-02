import React, { Component } from "react";
import "./Header.css";
import { Link, animateScroll as scroll } from "react-scroll";
// import { Col } from "reactstrap";
import { elastic as Menu } from "react-burger-menu";

class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div>
        <Menu right>
          <img
            src={require("../../img/logo-avatar-01.svg")}
            className="nav-logo"
            alt="Logo"
          />
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
              "https://drive.google.com/file/d/1QCQg8k4RQALoniQS6oPznFATIT_Nl1DK/view?usp=sharing"
            }
            target={"_blank"}
          >
            curriculum
          </a>
        </Menu>
      </div>
    );
  }
}

export default Header;
