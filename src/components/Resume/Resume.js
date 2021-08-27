import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Placeres_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section-main">
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Computer Programmer"
              date="January 2017 - Present"
              content={[
                "Developed tracking systems to record issues on the manufacturing floor." +
                " in combination with dashboards to provide management with the necessary information to reduce cost and waste." +
                "Also, Developed multiple WPF applications for auditing and other production processes while." +
                " mantaining multiple SQL Databases.",
              ]}
            />
            <Resumecontent
              title="Quality Auditor and Metrologist"
              content={[
                "Created and maintained programs for molding parts using CNC Sprint (Vision System). Inspected a large" +
                "variety of components, charted and created reports using SPC. Performed FAI for external customers and part approvals." +
                "Performed line and finished goods audits and ISO audits. Reporting to management and creating" +
                "corrective/preventive actions when needed. Issuing CAPAs forms",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Process Control Engineering [Havana, Cuba]"
              date="September 2008 - June 2012"
              content={["Process control Engineering Major"]}
            />
            <Resumecontent
              title="UCF [Orlando, Florida]"
              date="June 14, 2021 - September 07, 2021"
              content={["Full Stack Web development"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
