import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import Appspinner from "./Appspinner"

const PostPage = () => {
    
    const [isloading, setisloading] = useState(true)

    const [posts, setPosts] = useState([{
        "userId": 0,
        "id": 0,
        "title": '',
        "body": '',
    },
    ])
    useEffect(() => {
        console.log(posts)
    },null)

    const getDataHandler = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(response => {
                setPosts(response)
                setisloading(false)
            })
    }
    return (
        <Container className="p-4">
            <Row className="mb-4">
                <Col md={4} className="text-start">
                    <Button onClick={getDataHandler}>Get Data</Button>
                </Col>
            </Row>
            <Row className="g-4">
                {
                    isloading ? <Appspinner /> :
                        (posts && posts.map(post => (
                            <Col md={4}>
                                <Card key={post.id}>
                                    <Card.Body>
                                        <Card.Title>{post.litle}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{post.userId}</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text> {post.body}
                                        <Card.Link href="#">View</Card.Link>
                                        <Card.Link href="#">Delete</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )))
                }
            </Row>
        </Container>
    )
}
export default PostPage