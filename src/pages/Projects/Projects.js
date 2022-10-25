// Import Required Files
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import tastyBytes from "../../Assets/Projects/tasty-bytes.png";
import teamProject from "../../Assets/Projects/team-project.png";
import weatherDash from "../../Assets/Projects/weather-dashboard.png";
import workScheduler from "../../Assets/Projects/work-scheduler.png";
import budgetTracker from "../../Assets/Projects/budget-tracker.png";
import blog from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Some of my <strong className="blue"> Work </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tastyBytes}
              title="Tasty Bytes"
              description="Have you ever woken up and open your fridge and said to yourself: I have nothing to eat! What if its not the lack of ingredients, but rather the lack of recipes you know. Our app Tasty Bytes, creates whole recipes that you can make with ingredients you have laying around,along with complete instructions and food labels. Additionally, for my brunch lovers and day drinkers Tasty Bytes can create cocktail mixes as well."
              link="https://julioplaceres.github.io/TastyBytes/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamProject}
              title="Team Assembly"
              description="A nodejs application to help assemble the needed documentation to create a team. Through a series of questions, using inquirer the user will be able to enter the information being requested, the application once the user enter all desired team members, will generate a html file with the appropiate information"
              link="https://github.com/julioPlaceres/TeamProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherDash}
              title="Weather Dashboard"
              description="Application to display the weather status in different cities, allows the search history to be saved and will provide the user with a 5 days forecast."
              link="https://julioplaceres.github.io/Weather_App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workScheduler}
              title="Work Scheduler"
              description="A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery using the Moment.js library."
              link="https://julioplaceres.github.io/work_scheduler/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgetTracker}
              title="Budget Tracker"
              description="A budget Tracker application to allow for offline access and functionality. When entering transactions offline, they will populate the total when brought back online."
              link="https://still-bayou-73273.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              title="Gaming Blog"
              description="An application using mysql database, following CMS-style built using (MVC). Uses MySQL2, Express, Sequelize, Bulma, Handlebars and dotenv"
              link="https://intense-inlet-50111.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
