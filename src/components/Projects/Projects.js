import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ubuntu from "../../Assets/Projects/ubuntu.png";
import weather from "../../Assets/Projects/weather.png";
import lapremierebrique from "../../Assets/Projects/lapremierebrique.png";
import interpreteur from "../../Assets/Projects/interpreteur.png";
import myyoutube from "../../Assets/Projects/myyoutube.png";
import bsq from "../../Assets/Projects/bsq.png";
import dante from "../../Assets/Projects/dante.png";
import defender from "../../Assets/Projects/defender.png";
import duckhunt from "../../Assets/Projects/duckhunt.png";
import matchstick from "../../Assets/Projects/matchstick.png";
import n4s from "../../Assets/Projects/n4s.png";
import navy from "../../Assets/Projects/navy.png";
import runner from "../../Assets/Projects/runner.png";
import sokoban from "../../Assets/Projects/sokoban.png";
import bomberman from "../../Assets/Projects/bomberman.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Mes <strong className="purple">Projets </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Quelques projets sur lesquelles j'ai travaillé récemment !
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
                            title="MyYoutube"
                            description="J'ai réalisé l'intégration d'un clone de YouTube pour un projet d'école en utilisant React. Ce projet m'a permis de développer mes compétences en front-end et de recréer une interface utilisateur complexe tout en optimisant les performances et l'expérience utilisateur."
                            ghLink="https://github.com/MAvyan/MyYoutube"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={weather}
                            isBlog={false}
                            title="What's The Weather"
                            description="J'ai développé une application météo en utilisant Swift et son framework SwiftUI pour un projet d'école. Ce projet m'a permis d'approfondir mes compétences en développement iOS tout en créant une interface utilisateur fluide et réactive, optimisée pour une expérience utilisateur intuitive."
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={interpreteur}
                            isBlog={false}
                            title="Intérpreteur de commande"
                            description="J'ai développé un interpréteur de commandes UNIX en Python pour un projet d'école. Ce projet, réalisé sous Debian, m'a permis de renforcer mes compétences en programmation système et en gestion des processus sous Linux."
                            ghLink="https://github.com/MAvyan/Minishell"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={bomberman}
                            isBlog={false}
                            title="MyRPG"
                            description="J'ai développé un jeu de type RPG en C pour un projet d'école. Cette expérience m'a permis de renforcer mes compétences en programmation système et en C."
                            ghLink="https://github.com/MAvyan/RPG"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ubuntu}
                            isBlog={false}
                            title="MyLittleAnsible"
                            description="J'ai développé un programme en ligne de commande en Python pour configurer des hôtes distants, dans le cadre d'un projet d'école. Cette expérience m'a offert une compréhension approfondie de la configuration déclarative et de la gestion de services sur des systèmes Linux."
                            ghLink="https://github.com/MAvyan/MyLittleAnsible"
                        />
                    </Col>
                                        <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={bsq}
                            isBlog={false}
                            title="BSQ"
                            description="J'ai développé un programme en C pour résoudre le problème du plus grand carré (BSQ) dans une matrice pour un projet d'école. Ce projet m'a permis de renforcer mes compétences en algorithmes et en manipulation de structures de données sous Linux."
                            ghLink="https://github.com/MAvyan/MyLittleAnsible"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={dante}
                            isBlog={false}
                            title="Dante"
                            description="J'ai réalisé un générateur et solveur de labyrinthes en C dans le cadre du projet Dante. Ce projet m'a permis d'explorer des algorithmes de génération procédurale et de résolution de labyrinthes tout en perfectionnant mes compétences en programmation système."
                            ghLink="https://github.com/MAvyan/MyLittleAnsible"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={defender}
                            isBlog={false}
                            title="Defender"
                            description="J'ai développé un jeu de défense en C pour un projet d'école, inspiré des classiques du genre. Ce projet m'a permis de concevoir des mécanismes de jeu stratégiques tout en optimisant les performances et la gestion des graphismes sous Linux."
                            ghLink="https://github.com/MAvyan/MyLittleAnsible"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={duckhunt}
                            isBlog={false}
                            title="Hunter"
                            description="J'ai conçu un projet en C appelé Hunter, où le but était de créer une IA capable de chasser des cibles dans un environnement donné. Ce projet m'a permis de développer des algorithmes de recherche et de gestion de l'intelligence artificielle."
                            ghLink="https://github.com/MAvyan/MyLittleAnsible"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={matchstick}
                            isBlog={false}
                            title="Matchstick"
                            description="J'ai développé un jeu de bâtonnets en C, où deux joueurs retirent des allumettes d'un tas, pour un projet d'école. Ce projet m'a permis d'explorer des stratégies algorithmiques simples tout en renforçant mes compétences en gestion de projet sous Linux."
                            ghLink="https://github.com/MAvyan/MyLittleAnsible"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={n4s}
                            isBlog={false}
                            title="N4S"
                            description="J'ai participé au développement de N4S, une simulation de course de voitures autonomes en C. Ce projet m'a permis de travailler sur la programmation de capteurs, l'analyse de données en temps réel, et le contrôle de véhicules autonomes."
                            ghLink="https://github.com/MAvyan/MyLittleAnsible"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={navy}
                            isBlog={false}
                            title="Navy"
                            description="J'ai développé une version multijoueur du jeu de bataille navale en C pour un projet d'école. Ce projet m'a permis de travailler sur la gestion des signaux et des communications inter-processus sous Linux, renforçant ainsi mes compétences en développement réseau."
                            ghLink="https://github.com/MAvyan/MyLittleAnsible"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={runner}
                            isBlog={false}
                            title="Runner"
                            description="J'ai créé un jeu de type Runner en C, où le joueur doit éviter des obstacles dans un environnement en défilement. Ce projet m'a permis de développer des compétences en programmation de jeux, en gestion du temps et en optimisation des performances sous Linux."
                            ghLink="https://github.com/MAvyan/MyLittleAnsible"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={sokoban}
                            isBlog={false}
                            title="Sokoban"
                            description="J'ai réalisé une version du jeu Sokoban en C pour un projet d'école. Ce projet m'a permis d'implémenter des algorithmes de résolution de puzzles tout en améliorant mes compétences en manipulation de structures de données et en développement de jeux sous Linux."
                            ghLink="https://github.com/MAvyan/MyLittleAnsible"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
