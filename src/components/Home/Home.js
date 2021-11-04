// Import require Files
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import selfie from "../../Assets/selfie.jpg";

function Home() {
  return (
    <section>
      <Container fluid>
        <Container className="home">
          <Row>
          <Col md={6} className="homeHeader">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Julio Placeres</strong>
              </h1>
            </Col>
            <Col md={6} className="homeHeader">
            <img src={selfie} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="blue"> ABOUT ME</span>
            </h1>
            <p className="home-about-body">
            Looking forward to earning the position of Software Engineer at a leading organization to showcase
            my skills in programming to generate high-end solutions to general software issues along with a better
            user experience.
              <br />
              <br />Some of my experience include, but it's not limited to:
              <i>
                <b className="blue"> HTML5, CSS, JQuery, Javascript, bootstrap, WPF, LabVIEW, MySql, MongoDB, Express, ReactJS, Node, Handlebars, AWS, Webpack, C#. </b>
              </i>
              <br />
              <br />
              <i>
                I have also worked in muliple projects around the electronics manufacturing doing {" "}
                <b className="blue">
                  Process Improvements, SPC suites, 5S and Lean Six sigma projects
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/julioPlaceres"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/julio-placeres-731280a7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
