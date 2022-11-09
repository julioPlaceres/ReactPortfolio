import ProjectCard from "../../components/Cards/ProjectCards";
import tastyBytes from "../../Assets/Projects/tasty-bytes.png";
import weatherDash from "../../Assets/Projects/weather-dashboard.png";
import budgetTracker from "../../Assets/Projects/budget-tracker.png";
import agservices from "../../Assets/Projects/agservices.png";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";

function Projects() {
  return (
    <Container fluid className="project-section-container">
      <Row>
        <h1 className="d-flex project-section-h1">
          Software<strong className="blue mx-1">Work </strong>
        </h1>
        <Col sm={6} xl={3} className="project-section-col">
          <ProjectCard
            imgPath={tastyBytes}
            title="Tasty Bytes"
            description="A responsive, mobile-first, progressive web app (PWA) using HTML/CSS and JavaScript. Using the open-source Bulma CSS framework for styling. The data in this project is coming from 2 APIs Spoonacular and The Cocktail DB."
            link="https://julioplaceres.github.io/TastyBytes/"
          />
        </Col>

        <Col sm={6} xl={3} className="project-section-col">
          <ProjectCard
            imgPath={agservices}
            title="AG Organazing And Cleaning Services"
            description="Family owned and operated, AG Organizing and Cleaning Services was founded in 2022 with the mission of providing excellent cleaning services in the Syracuse, New York area."
            link="https://github.com/julioPlaceres/TeamProject"
          />
        </Col>

        <Col sm={6} xl={3} className="project-section-col">
          <ProjectCard
            imgPath={weatherDash}
            title="Weather Dashboard"
            description="Application to display the weather status in different cities, allows the search history to be saved and will provide the user with a 5 days forecast."
            link="https://julioplaceres.github.io/Weather_App/"
          />
        </Col>

        <Col sm={6} xl={3} className="project-section-col">
          <ProjectCard
            imgPath={budgetTracker}
            title="Budget Tracker"
            description="A budget Tracker application to allow for offline access and functionality. When entering transactions offline, they will populate the total when brought back online."
            link="https://still-bayou-73273.herokuapp.com/"
          />
        </Col>
      </Row>
      {/* Manufacturing Section */}
      <Row>
        <h1 className="d-flex project-section-h1">
          Manufacturing<strong className="blue mx-1">Work </strong>
        </h1>
        <Col sm={6} xl={3} className="project-section-col">
          <ProjectCard
            imgPath={tastyBytes}
            title="Tasty Bytes"
            description="A responsive, mobile-first, progressive web app (PWA) using HTML/CSS and JavaScript. Using the open-source Bulma CSS framework for styling. The data in this project is coming from 2 APIs Spoonacular and The Cocktail DB."
            link="https://julioplaceres.github.io/TastyBytes/"
          />
        </Col>

        <Col sm={6} xl={3} className="project-section-col">
          <ProjectCard
            imgPath={agservices}
            title="AG Organazing And Cleaning Services"
            description="Family owned and operated, AG Organizing and Cleaning Services was founded in 2022 with the mission of providing excellent cleaning services in the Syracuse, New York area."
            link="https://github.com/julioPlaceres/TeamProject"
          />
        </Col>

        <Col sm={6} xl={3} className="project-section-col">
          <ProjectCard
            imgPath={weatherDash}
            title="Weather Dashboard"
            description="Application to display the weather status in different cities, allows the search history to be saved and will provide the user with a 5 days forecast."
            link="https://julioplaceres.github.io/Weather_App/"
          />
        </Col>

        <Col sm={6} xl={3} className="project-section-col">
          <ProjectCard
            imgPath={budgetTracker}
            title="Budget Tracker"
            description="A budget Tracker application to allow for offline access and functionality. When entering transactions offline, they will populate the total when brought back online."
            link="https://still-bayou-73273.herokuapp.com/"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
