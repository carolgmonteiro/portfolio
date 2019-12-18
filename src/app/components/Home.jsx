import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
// import "./Button.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Typist from "react-typist";
import "./Typist.scss";
// import Header from "../components/Header";
// import Fade from "react-reveal/Fade";

import { Link, animateScroll as scroll } from "react-scroll";
// import { Col } from "reactstrap";
class Home extends React.Component {
  state = {
    renderMsg: false
  };

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  };

  render() {
    AOS.init();
    // const docs = "//github.com/carolgmonteiro";
    return (
      <div className="home" id="home">
        <div className="text-zone">
          <div className="TypistExample">
            <Typist
              className="TypistExample-header"
              avgTypingDelay={40}
              startDelay={500}
              onTypingDone={this.onHeaderTyped}
            >
              <h1>Hello!</h1>
              <a href="#about">I'm Carolina</a>
              <h1>Web developer</h1>
            </Typist>
            <div className="TypistExample-content">
              {this.state.renderMsg ? (
                <Typist
                  className="TypistExample-message"
                  cursor={{ hideWhenDone: true }}
                >
                  Front End Developer & UI.UX Des
                  <Typist.Delay ms={500} />
                  enh
                  <Typist.Backspace count={3} delay={1000} />
                  <Typist.Delay ms={750} />
                  igner
                  <Typist.Delay ms={750} />
                  <br />
                  <br />
                  <span>
                    {" "}
                    <a href="#contact" className="flash">
                      Contact me
                    </a>
                  </span>
                  <br />
                </Typist>
              ) : null}
            </div>
          </div>
        </div>
        <div className="home-content">
          <div
            className="button-content"
            data-aos="zoom-out"
            data-aos-delay="5000"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="3000"
          >
            {/* <Link
              className="btn"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              // offset={-70}
              duration={500}
            > */}

            <img
              src={require("../../img/avatar12.svg")}
              className="btn-icon-home"
              alt="about"
            />
            <div id="section05" className="demo">
              <Link activeClass="active" to="projects" spy={true} smooth={true}>
                <span></span>
                <span></span>
                <span></span>
              </Link>
            </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
