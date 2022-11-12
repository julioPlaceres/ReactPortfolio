import selfie from "../../Assets/selfie2.jpg";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <>
      <Container fluid className="home">
        <Row>
          <Col className="home-contact-col">
            <p>Julio A Placeres</p>
            <p>Owner & CEO</p>
            <p>Orlando, Florida</p>
            <p>Mobile: (315) 878-4223</p>
            <p>Email: jplaceresvaldes@outlook.com</p>
          </Col>
          <Col>
            <img width={300} src={selfie} alt="Portrait" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="home-about-title">
              <span className="blue">ABOUT </span>ME
            </h1>
            <p>
              Software Engineer, self-taught, entrepreneur, always striving to
              work towards continuous improvement. Initially a QA in the
              manufacturing industry, I worked my way up to Developer Lead in
              multiple projects. Later on, I founded JW Cipher, a business with
              the vision to provide small businesses with Software tools to
              analyze and improve their current process to higher sigma levels,
              providing analytical reports, dashboards, among other packages
              options.
            </p>
            <p>
              Some of my experience includes, but it's not limited to{" "}
              <span className="blue">
                HTML5, CSS, JQuery, Javascript, bootstrap, WPF, LabVIEW, MySql,
                MongoDB, Express, ReactJS, Node, Handlebars, AWS, Webpack, C#.
              </span>
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>

            <ul className="home-ul-social">
              <li>
                <a
                  href="https://github.com/julioPlaceres"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/julio-placeres-731280a7"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
