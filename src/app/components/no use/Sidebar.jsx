import React, { PureComponent } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Sidebar.css";

class Sidebar extends PureComponent {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu
        right
        width={280}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
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
    );
  }
}

export default Sidebar;


import React, { Component } from "react";
import "./Header.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { Container, Row, Col } from "reactstrap";

import { stack as Menu } from "react-burger-menu";

class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <Row className="nav" id="navbar">
        {/* <Col className="nav-content"> */}
        {/* <Col xs="3" className="logo-content">
            <img
              src={require("../../img/avatar02.svg")}
              className="nav-logo"
              alt="Logo"
              onClick={this.scrollToTop}
            />
          </Col> */}
        {/* <Col xs="3"></Col>
          <Col xs="3"></Col> */}
        {/* <Col > */}
        <Menu
          className="right"
          noOverlay
          right
          width={300}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        >
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
        {/* </Col> */}
        {/* </Col> */}
      </Row>
    );
  }
}

export default Header;
