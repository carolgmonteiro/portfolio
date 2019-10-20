import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
// import Header from "../components/Header";
import { Link, animateScroll as scroll } from "react-scroll";

class Home extends React.Component {
  render() {
    return (
      <div className="home" id="home">
        <div className="home-content">
          <h1 className="responsive-headline">"Hi! I am Carolina"</h1>
          <h3>Front-end developer and interface designer</h3>

          <div className="button-content">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <img
                src={require("../../img/button-home-04.svg")}
                className="about-icon"
                alt="about"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
