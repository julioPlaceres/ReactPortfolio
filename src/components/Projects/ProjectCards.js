// Import Required Files
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="card-view">
      {/* Image */}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        {/* Title */}
        <Card.Title>{props.title}</Card.Title>
        {/* Description */}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* Link */}
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {"View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}
// Export Module
export default ProjectCards;
