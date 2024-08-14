import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import Projects from "./Projects";

function Profil() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Skills </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          Mes <strong className="purple">Outils</strong>
        </h1>
        <Toolstack />
        <Projects />
      </Container>
    </Container>
  );
}

export default Profil;
