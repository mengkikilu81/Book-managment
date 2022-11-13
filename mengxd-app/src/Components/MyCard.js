import { Button, Card } from "react-bootstrap"

const MyCard=()=>{    
    return (
        <Card  className="m-5">
        <Card.Img variant="top" src="https://yt3.ggpht.com/8-lAFkP7nxfs-Cz_K3U4Ip3SnK9_JO5vbWnmc0fcX7o0tFjjVKb7nUpJ_Ek7oCWVh8JPHdw6VQ=s900-c-k-c0x00ffffff-no-rj" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}
 
export default MyCard