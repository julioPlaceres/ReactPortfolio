import Tech from "../../components/Techs/Tech";
import aboutImg from "../../Assets/about-img.jpg";
import Aboutcard from "../../components/Cards/AboutCard";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <Container fluid>
        <Row>
          <Col>
            <h1 style={{ color: "white" }}>
              About <strong className="blue">me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col>
            <img src={aboutImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 style={{color: "white"}}>
          Professional <strong className="blue">Skills </strong>
        </h1>
        <Tech />
    </Container>
  );
}

export default About;
