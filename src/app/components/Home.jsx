import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
// import Header from "../components/Header";
import Fade from "react-reveal/Fade";

import { Link, animateScroll as scroll } from "react-scroll";
import { Col } from "reactstrap";
class Home extends React.Component {
  render() {
    return (
      <div className="home" id="home">
        <Col>
          <div className="home-content">
            {/* <h1 className="responsive-headline">"Hi! I am Carolina"</h1>
            <h3>Front-end developer and interface designer</h3> */}

            <div className="button-content">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Fade top>
                  <img
                    className="hi"
                    src={require("../../img/hi.svg")}
                    alt="about"
                  />
                </Fade>
              </Link>
            </div>
          </div>
        </Col>
      </div>
    );
  }
}

export default Home;
