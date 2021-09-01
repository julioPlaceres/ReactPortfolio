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
              LET ME TELL YOU <span className="blue"> A LITTLE ABOUT MYSELF</span>
            </h1>
            <p className="home-about-body">
              Ever since young I have loved programming, but back in my home country
              I never got a chance to have a PC, but that didn't stop me from learning 
              as much as possible, and then onced I moved to the United states I was finally
              able to start my education and since 2012 I started my never ending journey as 
              a programmer
              <br />
              <br />Some of my experience include, but it's not limited to:
              <i>
                <b className="blue"> Javascript, MySql, MongoDB, HTML, CSS, C# and LabVIEW. </b>
              </i>
              <br />
              <br />
              My passion has always been &nbsp;
              <i>
                <b className="blue"> Game development </b> where in the future 
                I have plans after getting enough experience to create my own company.
                I have also worked in muliple projects around the electronics manufacturing doing {" "}
                <b className="blue">
                  Process Improvements, SPC suites, 5S and Lean Six sigma projects
                </b>
              </i>
              <br />
              <br />
              I love doing web development
              with <b className="blue">Node.js</b> and
              <i>
                <b className="blue">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> React.js and Express.js</b>
              </i>
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
