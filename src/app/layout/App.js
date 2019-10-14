import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Home id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
      </div>
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
