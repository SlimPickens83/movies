import React from "react";
import Card from "react-bootstrap/Card"

function Thumbnail(props) {
  return (
    <Card id="thumbnail" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.director}</Card.Subtitle>
        <Card.Text>{props.summary}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Thumbnail
