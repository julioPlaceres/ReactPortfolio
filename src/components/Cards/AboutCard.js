import React from "react";
import Card from "react-bootstrap/Card";
import { ImPacman, ImHeadphones, ImAirplane } from "react-icons/im";
import "./AboutCard.css";

function AboutCard() {
  return (
    <Card className="quote-view">
      <Card.Body>
        <blockquote className="blockquote">
          <p>
            Software Engineer with a passion for learning and creating
            useful applications, always working towards continuous improvement,
            and customer satisfaction.
            </p>
            
            <p>
            From an early age I fell in love with programming languages, 
            but it wasn't until I got my first job in New York that I started 
            getting involved with it. I started my journey in the Manufacturing 
            Industry, where I was introduced by my mentor to the Lean Six Sigma 
            practices, during that time i put my coding skills to use, creating 
            Dashboards, Data Entry apps, Labview apps, extended functionability 
            for the ERP system we used, among other tasks involving the Quality 
            team.
            </p>

            <p>
              After 10 years working for my first employer I decided to expand 
              my view, and I moved to Florida where I started getting involved
              with Web development, since most of my experience previously had 
              been with C# and SQL. There after some time researching the market
              I decided to open my own bussiness <span className="blue">JW Cipher</span>,
              a software company which main function was to provide support to 
              Manufacturing companies, from Quality Software applications, to 
              creating companies identities, marketing, SEO, consulting, and 
              more. With a mangnificent team we have been able to provide
              satisfcation to our clients given them the tools to succeed in 
              their path. Not everything is work though, a work-life balance
              is necesary to achive sucess, and below you can see some of 
              my favorites past times. 
            </p>

            <h4>Aside from coding some of the activities I love the most are:</h4>
          
          <ul style={{listStyle: 'none'}}>
            <li> <ImPacman /> Playing Video Games </li>
            <li> <ImHeadphones /> Latin dance </li>
            <li> <ImAirplane /> Travelling </li>
          </ul>

          <p className="blue">
            "To create a new standard, you have to be up for that challenge and really enjoy it.!"{" "}
          </p>
          <footer className="blockquote-footer blue">Shigeru Miyamoto</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
