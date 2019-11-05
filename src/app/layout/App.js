import React, { Component } from "react";

import "./App.css";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Col } from "reactstrap";
class App extends Component {
  render() {
    return (
      <main id="App">
        <Header
          width={"350px"}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <Col className="nav-logo">
          <img
            src={require("../../img/logo-avatar.svg")}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
        </Col>
        <div id="outer-container">
          <div id="page-wrap">
            <Home id="home" />
            <Projects id="projects" />
            <About id="about" />
            <Contact id="contact" />
            <Footer />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
