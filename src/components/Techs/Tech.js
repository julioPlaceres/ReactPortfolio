import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1, DiReact, DiNodejs,
  DiMongodb, DiGit, DiMysql, DiHtml5
} from "react-icons/di";
import {
  SiCsharp, SiHeroku, SiLabview,
  SiVisualstudiocode, SiCss3,
  SiJquery, SiBootstrap, SiWebpack
} from "react-icons/si";
import {
  FaWpforms, FaNodeJs, FaAws
} from "react-icons/fa";
import "./Tech.css";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"> <h6> HTML5</h6> <DiHtml5 /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> CSS3</h6> <SiCss3 /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> JQuery</h6> <SiJquery /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> bootstrap</h6> <SiBootstrap /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> Javascript</h6> <DiJavascript1 /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> NodeJS</h6> <FaNodeJs/> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> Webpack</h6> <SiWebpack/> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> AWS</h6> <FaAws/> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> WinForms</h6> <FaWpforms /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> NodeJS</h6> <DiNodejs /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> React</h6> <DiReact /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> MongoDb</h6> <DiMongodb /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> Git</h6> <DiGit /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> MySQL</h6> <DiMysql /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> C#</h6> <SiCsharp /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> LabVIEW</h6> <SiLabview /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> Visual Studio</h6> <SiVisualstudiocode /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <h6> Heroku</h6> <SiHeroku /> </Col>
    </Row>
  );
}

export default Techstack;