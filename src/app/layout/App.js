import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Row } from "reactstrap";
import { Col } from "reactstrap";
import Home from "../features/views/Home";
import AboutMe from "../features/views/AboutMe";
import Projects from "../features/views/Projects";
import Contact from "../features/views/Contact";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="nav-link">
          <Row>
            <Col>
              <Link to={"/"}>
                <div className="menu-icons">
                  <img
                    src={require("../../img/astronaut_face.svg")}
                    alt="logo-home"
                    height="40"
                    width="40"
                  />
                  <p>Home</p>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to={"/aboutMe"}>
                <div className="menu-icons">
                  <img
                    src={require("../../img/astronaut.svg")}
                    alt="logo-aboutMe"
                    height="40"
                    width="40"
                  />
                  <p>About me</p>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to={"/projects"}>
                <div className="menu-icons">
                  <img
                    src={require("../../img/rocket.svg")}
                    alt="logo-projects"
                    height="40"
                    width="40"
                  />
                  <p>Projects</p>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to={"/contact"}>
                <div className="menu-icons">
                  <img
                    src={require("../../img/planet-earth.svg")}
                    alt="logo-contact"
                    height="40"
                    width="40"
                  />
                  <p>Contact</p>
                </div>
              </Link>
            </Col>
          </Row>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;

// <Router>
//         <Route
//           render={({ location, history }) => (
//             <React.Fragment>
//               <SideNav
//                 onSelect={selected => {
//                   const to = "/" + selected;
//                   if (location.pathname !== to) {
//                     history.push(to);
//                   }
//                 }}
//               >
//                 <SideNav.Toggle />
//                 <SideNav.Nav defaultSelected="home">
//                   <NavItem eventKey="home">
//                     <NavIcon>
//                       <img
//                         src={require("../../img/astronaut_face.svg")}
//                         alt="logo-home"
//                         height="40"
//                         width="40"
//                       />
//                       <i
//                         className="fa fa-fw fa-home"
//                         style={{ fontSize: "1.75em" }}
//                       />
//                     </NavIcon>
//                     <NavText>Home</NavText>
//                   </NavItem>
//                   <NavItem eventKey="aboutMe">
//                     <NavIcon>
//                       <img
//                         src={require("../../img/astronaut.svg")}
//                         alt="logo-aboutMe"
//                         height="40"
//                         width="40"
//                       />
//                       <i
//                         className="fa fa-fw fa-aboutMe"
//                         style={{ fontSize: "1.75em" }}
//                       />
//                     </NavIcon>
//                     <NavText>About Me</NavText>
//                   </NavItem>
//                   <NavItem eventKey="projects">
//                     <NavIcon>
//                       <img
//                         src={require("../../img/rocket.svg")}
//                         alt="logo-projects"
//                         height="40"
//                         width="40"
//                       />
//                       <i
//                         className="fa fa-fw fa-projects"
//                         style={{ fontSize: "1.75em" }}
//                       />
//                     </NavIcon>
//                     <NavText>Projects</NavText>
//                   </NavItem>
//                   <NavItem eventKey="contact">
//                     <NavIcon>
//                       <img
//                         src={require("../../img/planet-earth.svg")}
//                         alt="logo-contact"
//                         height="40"
//                         width="40"
//                       />
//                       <i
//                         className="fa fa-fw contact"
//                         style={{ fontSize: "1.75em" }}
//                       />
//                     </NavIcon>
//                     <NavText>Contact</NavText>
//                   </NavItem>
//                 </SideNav.Nav>
//               </SideNav>
//               <main>
//                 <Route exact path="/" component={Home} />
//                 <Route path="/aboutMe" component={AboutMe} />
//                 <Route path="/projects" component={Projects} />
//                 <Route path="/contact" component={Contact} />
//               </main>
//             </React.Fragment>
//           )}
//         />
//       </Router>
