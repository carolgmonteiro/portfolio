import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="lead">
        <div className="order-kitchen-container">
          <h1>About Me</h1>
          <p>
            Desarrolladora front-end estudiante de Laboratoria con experiencia
            en diseño de interface y diseño de experiencia de usuário. Mi
            motivación es aprender constantemente y desarrollar trabajos en
            equipo. Ingressé al mercado de desarrollo tecnológico con el
            objetivo de ayudar a crear herramientas accesibles que mejoren la
            comunicación entre las personas, tornando el mundo digital más
            inclusivo.
          </p>
          <h3>SKILLS</h3>
          <li>Habilidads Blandas</li>
          <li>Diseño</li>
          <li>Lógica</li>
        </div>
      </div>
    );
  }
}

export default AboutMe;
