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
      // <div>
      //   <Col className="nav-logo">
      //     <img
      //       src={require("../../img/avatar03.svg")}
      //       className="nav-logo"
      //       alt="Logo"
      //       onClick={this.scrollToTop}
      //     />
      //   </Col>
      <Menu>
        {/* <li>
          <img
            src={require("../../img/avatar02.svg")}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
        </li> */}
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
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            contact
          </Link>
        </li>
        <li className="nav-item">
          <a
            href={
              "https://drive.google.com/file/d/1BhVSghST2Sse70PQ6WfoAtNmNZwz5Xok/view?usp=sharing"
            }
            target={"_blank"}
          >
            c.v.
          </a>
        </li>
      </Menu>
      // </div>
    );
  }
}

export default Header;
