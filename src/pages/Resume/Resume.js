import pdf from "../../Assets/Placeres_Resume.pdf";
import Resumecontent from "../../components/ResumeContent/ResumeContent";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Resume.css";

function Resume() {
  return (
    <Container fluid className="resume-section-main">
      <Row className="justify-content-center">
        <Button
          style={{ minWidth: "200px" }}
          className="w-25"
          variant="primary"
          href={pdf}
          target="_blank"
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
      <Row className="resume">
        <Col md={6} className="resume-left">
          <h3 className="resume-title">Experience</h3>
          <Resumecontent
            title="Chief Executive Officer [Orlando, Florida]"
            date="October 2021 - Present"
            content={[
              "Managing team of experience designer and developers and creating compelling websites, PWAs, Desktop Applications.",
              "Developing SPC Software's for sell and distribution.",
            ]}
          />
          <Resumecontent
            title="Quality Engineer [Sandford, Florida]"
            date="November 2021 - July 2022"
            content={[
              "Contributed to develop company’s ERP system by expanding and improving the current functionality.",
              "Validated new and current systems, by doing regression and integration testing, verifying the software" +
                "meets all specifications and conforms to the user needs, enforcing all FDA industry standards and creating/updating SOPs.",
              "Provided IT support where needed (Managing systems, antiviruses, networks, personnel access).",
              "Backed up periodically all systems within the company.",
            ]}
          />
          <Resumecontent
            title="Quality Engineer [Syracuse, New York]"
            date="January 2017 - September 2021"
            content={[
              "Developed multiple SPC applications using Visual Studio (C#), Labview, among other technologies" +
                "that contributed to reducing the number of defects by collecting data from various processes and" +
                "displaying it on dashboards to monitor and track production overall performance.",
              "Provided Support to the IT department by expanding the ERP functionality [Epicor]",
              "Managed the qualification process of suppliers who were in Compliance with Reach, RoHS, and 3TG.",
              "Lead and participated in multiple Lean Six Sigma projects to increase productivity and reduce cost of production.",
            ]}
          />
        </Col>
        <Col md={6} className="resume-right">
          <h3 className="resume-title">Education</h3>
          <Resumecontent
            title="Full Stack Web Development - University of Central Florida [Orlando, Florida]"
            date="June 2021 - September 2021"
            content={["Full Stack Web development - Bootcamp"]}
          />
          <Resumecontent
            title="Process Control Engineering - Hermanos Gomez [Havana, Cuba]"
            date="September 2008 - June 2012"
            content={["Process Control - Bachelor Degree"]}
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          style={{ minWidth: "200px" }}
          className="w-25"
          variant="primary"
          href={pdf}
          target="_blank"
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default Resume;
