import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour ! Je suis <span className="purple">Yannis Mavinga </span>
            <br />
            Développeur Front-End freelance basé à <span className="purple"> Paris, France.</span>
            <br />
            Je rejoins le MSc (IMSc) de l'école <span className="purple">Epitech</span> en septembre 2024.
            <br />
            <br />
            Ce qui occupe mon temps en dehors du code !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Les sports-Auto
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
            <li className="about-activity">
              <ImPointRight /> L'Entrepreunariat
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
