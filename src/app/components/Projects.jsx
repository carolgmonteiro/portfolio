import React from "react";
import "./Projects.css";
import ProjectsDetails from "./ProjectsDetails";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects" id="projects">
        <div className="projects-content">
          <h2>some of my projects...</h2>
          <ProjectsDetails />
          {/* <div className="icons-container">
            
          </div> */}
        </div>
      </div>
    );
  }
}

export default Projects;

{
  /* <div className="projects" id="projects">
        <div className="projects-content">
          <h3>Front-end Projects</h3>
          <div className="icons-container">
            <div className="project-container">
              <img
                src={require("../../img/pinterest.svg")}
                className="icon-project"
                alt="icon"
              />
              <div className="code">
                <p>
                  Given a set of image urls (api), I recreated the design of the
                  pinterest page.Tools: React JS, Adobe XD, Balsamiq, library
                  and api. Tools: React JS, Adobe XD, Balsamiq, library and api
                  Pixabay.
                  {/* Dado un conjunto de urls de imagen (api), recreé el diseño de
                  la página de pinterest. Herramientas: React JS, Adobe XD,
                  Balsamiq, librerias api. */
}
//           </p>
//           <a
//             href={
//               "https://drive.google.com/file/d/1BhVSghST2Sse70PQ6WfoAtNmNZwz5Xok/view?usp=sharing"
//             }
//             target={"_blank"}
//           >
//             <img
//               src={require("../../img/demo.svg")}
//               className="icon-code"
//               alt="icon-code"
//             />
//             demo
//           </a>

//           <a
//             href={"https://github.com/carolgmonteiro/desafio_pinterest"}
//             target={"_blank"}
//           >
//             <img
//               src={require("../../img/code.svg")}
//               className="icon-code"
//               alt="icon-code"
//             />
//             code
//           </a>
//         </div>
//       </div>
//       <div className="project-container">
//         <img
//           src={require("../../img/burgerqueen.svg")}
//           className="icon-project"
//           alt="icon"
//         />
//         <div className="code">
//           <p>
//             It is an interface designed for restaurants, which allows an
//             easier service flow that takes from the "ordering" the food
//             "delivery" it to the customer. Tools: React JS, Adobe XD,
//             firebase, bootstrap.
//             {/* Es una interfaz diseñada para restaurantes, que permite
//             facilitar el flujo que se lleva desde la toma de pedidos hasta
//             la entrega de estos al cliente. Herramientas: React JS, Adobe
//             XD, firebase, Bootstrap. */}
//           </p>
//           <a
//             href={"https://adrievelyn.github.io/SCL010-Burger-Queen/"}
//             target={"_blank"}
//           >
//             <img
//               src={require("../../img/demo.svg")}
//               className="icon-code"
//               alt="icon-code"
//             />
//             demo
//           </a>
//           <a
//             href={"https://github.com/adrievelyn/SCL010-Burger-Queen"}
//             target={"_blank"}
//           >
//             <img
//               src={require("../../img/code.svg")}
//               className="icon-code"
//               alt="icon-code"
//             />
//             code
//           </a>
//         </div>
//       </div>
//       <div className="project-container">
//         <img
//           src={require("../../img/mdlinks.svg")}
//           className="icon-project"
//           alt="icon"
//         />
//         <div className="code">
//           <p>
//             Libreria creada usando Node.js que lee y analiza archivos en
//             formato Markdown. Herramientas: Javascript, Node js,
//             librerias, jest, Adobe XD, Balsamiq, loom.
//           </p>
//           <a
//             href={
//               "https://www.npmjs.com/package/@carolgmonteiro/md-links?activeTab=dependencies"
//             }
//             target={"_blank"}
//           >
//             <img
//               src={require("../../img/demo.svg")}
//               className="icon-code"
//               alt="icon-code"
//             />
//             npm
//           </a>
//           <a
//             href={"https://github.com/carolgmonteiro/SCL010-md-links"}
//             target={"_blank"}
//           >
//             <img
//               src={require("../../img/code.svg")}
//               className="icon-code"
//               alt="icon-code"
//             />
//             code
//           </a>
//         </div>
//       </div>
//       <div className="project-container">
//         <img
//           src={require("../../img/migrame.svg")}
//           className="icon-project"
//           alt="icon"
//         />
//         <div className="code">
//           <p>
//             Aplicación web SPA para usuarios que sean o no inmigrantes. La
//             idea es poder buscar información sobre trámites en el país al
//             que llegan, datos de alojamiento, trabajo, cultural, etc.
//             Herramientas: HTML5, CSS3, Javascript, firebase, jest, Adobe
//             XD, Balsamiq, loom.
//           </p>
//           <a
//             href={
//               "https://dacoquima.github.io/SCL010-Social-Network/src/#/home"
//             }
//             target={"_blank"}
//           >
//             <img
//               src={require("../../img/demo.svg")}
//               className="icon-code"
//               alt="icon-code"
//             />
//             demo
//           </a>
//           <a
//             href={
//               "https://github.com/carolgmonteiro/SCL010-Social-Network"
//             }
//             target={"_blank"}
//           >
//             <img
//               src={require("../../img/code.svg")}
//               className="icon-code"
//               alt="icon-code"
//             />
//             code
//           </a>
//         </div>
//       </div>

//       <div className="project-container">
//         <img
//           src={require("../../img/viewnow.svg")}
//           className="icon-project"
//           alt="icon"
//         />
//         <div className="code">
//           <p>
//             Diseño de manera inclusiva para personas con daltonismo,
//             recomenda películas según el animo y disponibilidad, además
//             filtra por género y directores. Herramientas: HTML5, CSS3,
//             Javascript, Figma, Balsamiq, Color Oracle
//           </p>
//           <a
//             href={
//               "https://carolgmonteiro.github.io/SCL010-hackathon-peliculas/src/index.html"
//             }
//             target={"_blank"}
//           >
//             <img
//               src={require("../../img/demo.svg")}
//               className="icon-code"
//               alt="icon-code"
//             />
//             demo
//           </a>
//           <a
//             href={
//               "https://github.com/carolgmonteiro/SCL010-hackathon-peliculas"
//             }
//             target={"_blank"}
//           >
//             <img
//               src={require("../../img/code.svg")}
//               className="icon-code"
//               alt="icon-code"
//             />
//             code
//           </a>
//         </div>
//       </div>
//       <div className="project-container">
//         <img
//           src={require("../../img/poketmon.svg")}
//           className="icon-project"
//           alt="icon"
//         />
//         <div className="code">
//           <p>
//             En esta plataforma puedes filtrar los pokemones por tipo,
//             saber sus debilidades, y obtener otro tipo de información más
//             básica como nombres y números de la pokedéx. Herramientas:
//             HTML5, CSS3, Javascript, Figma, Balsamiq.
//           </p>
//           <a
//             href={
//               "https://carolgmonteiro.github.io/SCL010-data-lovers/src/index.html"
//             }
//             target={"_blank"}
//           >
//             <img
//               src={require("../../img/demo.svg")}
//               className="icon-code"
//               alt="icon-code"
//             />
//             demo
//           </a>
//           <a
//             href={"https://github.com/carolgmonteiro/SCL010-data-lovers"}
//             target={"_blank"}
//           >
//             <img
//               src={require("../../img/code.svg")}
//               className="icon-code"
//               alt="icon-code"
//             />
//             code
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> */}
