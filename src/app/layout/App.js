import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Row } from "reactstrap";
import { Col } from "reactstrap";
import Home from "../features/views/Home";
import AboutMe from "../features/views/AboutMe";
import Projects from "../features/views/Projects";
import Contact from "../features/views/Contact";
class App extends Component {
  render() {
    return (
      <Router>
        <Row>
          <div className="navBar">
            <Col>
              <Link to={"/home"}>
                <div className="menu-icons">
                  <img
                    src={require("../../img/astronaut_face.svg")}
                    alt="logo-home"
                  />
                  <h3>Home</h3>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to={"/aboutMe"}>
                <div className="menu-icons">
                  <img
                    src={require("../../img/astronaut.svg")}
                    alt="logo-aboutMe"
                  />
                  <h3>About me</h3>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to={"/projects"}>
                <div className="menu-icons">
                  <img
                    src={require("../../img/rocket.svg")}
                    alt="logo-projects"
                  />
                  <h3>Projects</h3>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to={"/contact"}>
                <div className="menu-icons">
                  <img
                    src={require("../../img/planet-earth.svg")}
                    alt="logo-contact"
                  />
                  <h3>Contact</h3>
                </div>
              </Link>
            </Col>
          </div>
        </Row>
        <Switch>
          <Route extact path="/home" component={Home} />
          <Route extact path="/aboutMe" component={AboutMe} />
          <Route extact path="/projects" component={Projects} />
          <Route extact path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;
