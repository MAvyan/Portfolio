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
import wordle from "../../Assets/Projects/worlde.png";

const projectData = [
    {
        imgPath: lapremierebrique,
        title: "La Première Brique",
        description:
            "J'ai participé à l'intégration du site 'La Première Brique' en React et Tailwind, en veillant à améliorer les fonctionnalités et à optimiser l'expérience utilisateur.",
        ghLink: "https://github.com/MAvyan/integration_CAPSENS",
        demoLink: "https://www.lapremierebrique.fr/",
    },
    {
        imgPath: myyoutube,
        title: "MyYoutube",
        description:
            "J'ai développé l'interface d'un clone de YouTube en utilisant React et Tailwind pour un projet d'école. Ce projet m'a permis de recréer une interface utilisateur complexe tout en optimisant le design et les performances grâce à Tailwind. J'ai pu approfondir mes compétences en développement front-end et en structuration de composants pour des applications web modernes.",
        ghLink: "https://github.com/MAvyan/MyYoutube",
    },
    {
        imgPath: wordle,
        title: "Wordle",
        description:
            "J'ai développé un jeu de type Wordle en utilisant React. Ce projet m'a permis de créer une interface utilisateur interactive et responsive, tout en mettant en place des fonctionnalités de jeu qui gèrent les entrées de l'utilisateur et vérifient les mots. J'ai pu améliorer mes compétences en développement front-end et en logique de programmation pour des applications de jeux web.",
        ghLink: "https://github.com/MAvyan/Wordle",
    },
    {
        imgPath: weather,
        title: "What's The Weather",
        description:
            "J'ai développé une application météo en utilisant SwiftUI et une API pour un projet d'école. Ce projet m'a permis de créer une interface utilisateur fluide et réactive tout en intégrant des données météorologiques en temps réel via une API. J'ai pu approfondir mes compétences en développement iOS et en gestion de données externes dans une application mobile.",
    },
    {
        imgPath: interpreteur,
        title: "Intérpreteur de commande",
        description:
            "J'ai développé un interpréteur de commandes UNIX en Python pour un projet d'école. Ce projet sm'a permis de créer une interface en ligne de commande capable d'exécuter des instructions de base, en reproduisant le comportement d'un shell UNIX. Cette expérience m'a permis de renforcer mes compétences en programmation système et en gestion des processus sous Linux.",
        ghLink: "https://github.com/MAvyan/Minishell",
    },
    {
        imgPath: bomberman,
        title: "MyRPG",
        description:
            "J'ai développé un jeu de type RPG en C pour un projet d'école. Cette expérience m'a permis de renforcer mes compétences en programmation système et en C.",
        ghLink: "https://github.com/MAvyan/RPG",
    },
    {
        imgPath: ubuntu,
        title: "MyLittleAnsible",
        description:
            "J'ai développé un programme en ligne de commande en Python pour configurer des hôtes distants, dans le cadre d'un projet d'école.",
        ghLink: "https://github.com/MAvyan/MyLittleAnsible",
    },
    {
        imgPath: bsq,
        title: "BSQ",
        description:
            "J'ai développé un programme en C pour résoudre le problème du plus grand carré (BSQ) dans une matrice pour un projet d'école.",
        ghLink: "https://github.com/MAvyan/BSQ",
    },
    {
        imgPath: dante,
        title: "Dante",
        description:
            "J'ai réalisé un générateur et solveur de labyrinthes en C dans le cadre du projet Dante.",
        ghLink: "https://github.com/MAvyan/Dante",
    },
    {
        imgPath: defender,
        title: "Defender",
        description:
            "J'ai développé un jeu de défense en C pour un projet d'école, inspiré des classiques du genre.",
        ghLink: "https://github.com/MAvyan/Defender",
    },
    {
        imgPath: duckhunt,
        title: "Hunter",
        description:
            "J'ai conçu un projet en C appelé Hunter, où le but était de créer une IA capable de chasser des cibles dans un environnement donné.",
        ghLink: "https://github.com/MAvyan/Hunter",
    },
    {
        imgPath: matchstick,
        title: "Matchstick",
        description:
            "J'ai développé un jeu de bâtonnets en C, où deux joueurs retirent des allumettes d'un tas, pour un projet d'école.",
        ghLink: "https://github.com/MAvyan/Matchstick",
    },
    {
        imgPath: n4s,
        title: "N4S",
        description:
            "J'ai participé au développement de N4S, une simulation de course de voitures autonomes en C.",
        ghLink: "https://github.com/MAvyan/N4S",
    },
    {
        imgPath: navy,
        title: "Navy",
        description:
            "J'ai développé une version multijoueur du jeu de bataille navale en C pour un projet d'école.",
        ghLink: "https://github.com/MAvyan/Navy",
    },
    {
        imgPath: runner,
        title: "Runner",
        description:
            "J'ai créé un jeu de type Runner en C, où le joueur doit éviter des obstacles dans un environnement en défilement.",
        ghLink: "https://github.com/MAvyan/Runner",
    },
    {
        imgPath: sokoban,
        title: "Sokoban",
        description:
            "J'ai réalisé une version du jeu Sokoban en C pour un projet d'école.",
        ghLink: "https://github.com/MAvyan/Sokoban",
    },
];

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Mes <strong className="purple">Projets</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Quelques projets sur lesquelles j'ai travaillé récemment !
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {projectData.map((project, index) => (
                        <Col md={4} className="project-card" key={index}>
                            <ProjectCard
                                imgPath={project.imgPath}
                                isBlog={false}
                                title={project.title}
                                description={project.description}
                                ghLink={project.ghLink}
                                demoLink={project.demoLink}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
