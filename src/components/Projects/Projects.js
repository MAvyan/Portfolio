import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ubuntu from "../../Assets/Projects/ubuntu.png";
import weather from "../../Assets/Projects/weather.png";
import lapremierebrique from "../../Assets/Projects/lapremierebrique.png";
import interpreteur from "../../Assets/Projects/interpreteur.png";
import myyoutube from "../../Assets/Projects/myyoutube.png";
import bomberman from "../../Assets/Projects/bomberman.png";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Skills </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Quelques projets sur lesquelles j'ai travailé récemment !
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lapremierebrique}
              isBlog={false}
              title="La Première Brique"
              description="J'ai participé à l'intégration du site 'La Première Brique' en React et Tailwind, en veillant à améliorer les fonctionnalités et à optimiser l'expérience utilisateur. Cette mission m'a permis de développer mes compétences techniques et de contribuer à un projet concret."
              ghLink="https://github.com/MAvyan/integration_CAPSENS"
              demoLink="https://www.lapremierebrique.fr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myyoutube}
              isBlog={false}
              title="My Youtube"
              description="J'ai réalisé l'intégration d'un clone de YouTube pour un projet d'école en utilisant React. Ce projet m'a permis de développer mes compétences en front-end et de recréer une interface utilisateur complexe tout en optimisant les performances et l'expérience utilisateur."
              ghLink="https://github.com/MAvyan/MyYoutube"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="What's the weather"
              description="J'ai intégralement développé une application météo en utilisant Swift et son framework SwiftUI pour un projet d'école. Ce projet m'a permis d'approfondir mes compétences en développement iOS tout en créant une interface utilisateur fluide et réactive, optimisée pour une expérience utilisateur intuitive."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interpreteur}
              isBlog={false}
              title="Intérpreteur de commande"
              description="J'ai développé un interpréteur de commandes UNIX en Python pour un projet d'école. Ce projet, réalisé sous Debian, m'a permis de renforcer mes compétences en programmation système et en gestion des processus sous Linux."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bomberman}
              isBlog={false}
              title="Bomberman"
              description="J'ai développé un jeu de type Bomberman en C pour un projet d'école. Ce projet m'a permis de concevoir un jeu multijoueur avec des mécaniques de placement de bombes et de gestion des collisions. Cette expérience m'a permis de renforcer mes compétences en programmation système et en C."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ubuntu}
              isBlog={false}
              title="MyLittleAnsible"
              description="J'ai développé un programme en ligne de commande en Python pour configurer des hôtes distants, dans le cadre d'un projet d'école. Cette expérience m'a offert une compréhension approfondie de la configuration déclarative et de la gestion de services sur des systèmes Linux."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
