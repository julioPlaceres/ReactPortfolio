import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col>
          <h3>Julio A Placeres</h3>
        </Col>
        <Col>
          <ul className="footer-icons">
            <li>
              <a
                href="https://github.com/julioPlaceres"
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/julio-placeres-731280a7/"
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin {"  "}
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
