import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import Tech from "./Tech";
import aboutImg from "../../Assets/about-img.jpg";

function About() {
  return (
    <Container fluid className="about">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="blue">me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={aboutImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project">
          Professional <strong className="blue">Skills </strong>
        </h1>
        <Tech />
      </Container>
    </Container>
  );
}

export default About;
