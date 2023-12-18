import Card from "react-bootstrap/Card"

function Thumbnail(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Movie Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">dir. Jill Smith</Card.Subtitle>
        <Card.Text>A heartwarming tale of the courage and humanity that defines us all. Rated NC-17.</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Thumbnail
