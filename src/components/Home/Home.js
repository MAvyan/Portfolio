import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Footer from "./Footer";
import Type from "./Type";
import Page from "../About/About";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Bonjour !{" "}
              </h1>

              <h1 className="heading-name">
                ici
                <strong className="main-name"> YANNIS MAVINGA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: "30px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Page />
      <Footer />
    </section>
  );
}

export default Home;
