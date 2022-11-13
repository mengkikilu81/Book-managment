import { Card } from "react-bootstrap";

const Postpage = () => {[{
  "userId": 1,
  "id": 1,
  "title": "",
  "body": "",
}]
}
  const [post,setPosts] = useState(
    console.log("Postpage")
  )

  return (
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  );
};
export default Postpage;
