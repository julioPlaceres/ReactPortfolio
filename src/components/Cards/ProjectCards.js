import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import "./ProjectCards.css";

function ProjectCards(props) {
  return (
    <Card className="card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button
          className="mt-auto"
          variant="primary"
          href={props.link}
          target="_blank"
        >
          <BiLinkExternal /> &nbsp;
          {"View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}
// Export Module
export default ProjectCards;
