import Tech from "../../components/Techs/Tech";
import aboutImg from "../../Assets/about-img.jpg";
import Mfg from "../../components/Techs/MfgSkills";
import Aboutcard from "../../components/Cards/AboutCard";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6}>
          <img src={aboutImg} alt="about" className="img-fluid" />
        </Col>
        <Col xs={12} md={6}>
          <h1 style={{ color: "white" }}>
            About <strong className="blue">me</strong>
          </h1>
          <Aboutcard />
        </Col>
      </Row>

      <Row>
        <Col lg={6} style={{textAlign: 'center'}}>
        <h1 style={{ color: "white" }}>
          Software <strong className="blue"> Knoweldge</strong>
        </h1>
        <Tech />
        </Col>
        <Col lg={6}>
        <h1 style={{ color: "white" }}>
          Manufacturing<strong className="blue"> Knoweldge</strong>
        </h1>
        <Mfg />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
