import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
        <Footer />
      </div>
    );
  }
}

export default App;
