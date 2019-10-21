import React, { Component } from "react";
import "./Header.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { Col } from "reactstrap";

class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={require("../../img/avatar02.svg")}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />

          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
