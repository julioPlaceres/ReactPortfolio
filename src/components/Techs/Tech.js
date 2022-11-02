import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1, DiReact,
  DiMongodb, DiMysql, DiHtml5,
  DiRust
} from "react-icons/di";
import {
  SiCsharp, SiLabview, SiCss3,
  SiJquery,
} from "react-icons/si";
import { FaNodeJs, FaAws
} from "react-icons/fa";
import "./Tech.css";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={2} className="tech-icons-col"> <p> HTML5</p> <DiHtml5 className="tech-icons"/> </Col>
      <Col xs={3} md={2} className="tech-icons-col"> <p> CSS3</p> <SiCss3 className="tech-icons"/> </Col>
      <Col xs={3} md={2} className="tech-icons-col"> <p> JQuery</p> <SiJquery className="tech-icons"/> </Col>
      <Col xs={3} md={2} className="tech-icons-col"> <p> Javascript</p> <DiJavascript1 className="tech-icons"/> </Col>
      <Col xs={3} md={2} className="tech-icons-col"> <p> NodeJS</p> <FaNodeJs className="tech-icons"/> </Col>
      <Col xs={3} md={2} className="tech-icons-col"> <p> AWS</p> <FaAws className="tech-icons"/> </Col>
      <Col xs={3} md={2} className="tech-icons-col"> <p> React</p> <DiReact className="tech-icons"/> </Col>
      <Col xs={3} md={2} className="tech-icons-col"> <p> MongoDb</p> <DiMongodb className="tech-icons"/> </Col>
      <Col xs={3} md={2} className="tech-icons-col"> <p> MySQL</p> <DiMysql className="tech-icons"/> </Col>
      <Col xs={3} md={2} className="tech-icons-col"> <p> C#</p> <SiCsharp className="tech-icons"/> </Col>
      <Col xs={3} md={2} className="tech-icons-col"> <p> LabVIEW</p> <SiLabview className="tech-icons"/> </Col>
      <Col xs={3} md={2} className="tech-icons-col"> <p> Rust</p> <DiRust className="tech-icons"/> </Col>
    </Row>
  );
}

export default Techstack;