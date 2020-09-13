import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Typist from "react-typist";
import "./Typist.scss";

import { Link, animateScroll as scroll } from "react-scroll";
class Home extends React.Component {
  state = {
    renderMsg: false,
  };

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  };

  render() {
    AOS.init();
    // const docs = "//github.com/carolgmonteiro";
    return (
      <div
        className="col-12 d-flex justify-content-center align-items-center home"
        id="home"
      >
        <div className="col-md-6 p-0 text-zone">
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
                  Front-end Developer & UI UX Des
                  <Typist.Delay ms={500} />
                  enh
                  <Typist.Backspace count={3} delay={500} />
                  <Typist.Delay ms={500} />
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
        <div className="col-md-6 d-flex align-items-center  justify-content-center home-content">
          <div
            className="button-content"
            data-aos="zoom-out"
            data-aos-delay="10000"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="3000"
          >
            <img
              src={require("../../img/avatar14.svg")}
              className="btn-icon-home"
              alt="about"
            />
          </div>
        </div>
        <div id="section05" className="demo">
          <Link activeClass="active" to="projects" spy={true} smooth={true}>
            <span></span>
            <span></span>
            <span></span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
