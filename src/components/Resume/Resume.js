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
              title="Software Engineer"
              date="January 2017 - September 2021"
              content={[
                "● Developed SPC Suite that contributed to reducing the number of defects. Dashboards were placed " +
                "around the company in order to monitor and track production overall performance." +
                "● Developed an application to track the current of components by using Labview displaying the " +
                "information live to the reliability engineers." +
                "● Provided Support by expanding the ERP functionality, by creating a module for signing in and out " +
                "products in the wherehouse, which saved employer time, and reduced data entry defects." +
                "● Developed an application for auditing, which allowed auditors and management to act accordingly in a " +
                "timely manner to arising issues.",
              ]}
            />
            <Resumecontent
              title="Quality Auditor and Metrologist"
              content={[
                "● Created and maintained CNC programs, performing FPI for a variety of components and processes." +
                "● Performed Finish good products audits and Line audits to ensure quality of products as well as enforcing " +
                "standards operating procedures and safety." +
                "● Contributed to achieve and maintain ISO 9001:2008, ISO 9001:2015 as well as ISO14001 as one of the " +
                "lead auditors.",
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
