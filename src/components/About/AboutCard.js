// Import Require Files
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPacman, ImHeadphones, ImAirplane } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I was born and raised in <span className="blue"> Havana, Cuba </span> 
            now based in <span className="blue">Orlando, Florida</span> 
            <br />I am a junior software developer
            <br />
            <br />
            Aside from coding some of the activities I love the most are:
          </p>
          {/* Activities Icons */}
          <ul>
            <li className="activity">
              <ImPacman /> Playing Video Games
            </li>
            <li className="activity">
              <ImHeadphones /> Latin dance
            </li>
            <li className="activity">
              <ImAirplane /> Travelling
            </li>
          </ul>

          {/* Inspirational Quote  */}
          <p style={{ marginBlockEnd: 0, color: "rgb(34 49 214)" }}>
            "To create a new standard, you have to be up for that challenge and really enjoy it.!"{" "}
          </p>
          <footer className="blockquote-footer">Shigeru Miyamoto</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
