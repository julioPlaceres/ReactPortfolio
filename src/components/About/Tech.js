// Import Files Required
import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, 
  DiMongodb, DiGit, DiMysql } from "react-icons/di";
  import { SiCsharp, SiHeroku, SiLabview,
    SiVisualstudiocode } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        {/* JavaScript */}
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* Node.js */}
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* React.js */}
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* MongoDb */}
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* Git */}
        <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        {/* MySQL */}
        <DiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        {/* C# */}
        <SiCsharp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        {/* Labview */}
        <SiLabview />
        </Col>
        {/* Visual Studio */}
        <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      {/* Heroku */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Techstack;