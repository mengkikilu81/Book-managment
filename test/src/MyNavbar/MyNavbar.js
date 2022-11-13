import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "../MyStyle/Css/Mycolor.css";
const MyNavbar = () => {
  return (
    <Navbar className="color" variant="dark">
      <Container>
        <Row>
          {/* Start NavBar logo */}
          <Col md={4}>
            <Navbar.Brand href="#home" className="ps-0 font">
              <img
                src="https://www.istad.co/resources/img/logo_md.png"
                width="60"
                height="60"
                className="d-inline-block align-center me-2 "
                alt=" logoISTAD"
              />
              ISTAD
            </Navbar.Brand>
          </Col>
          {/* End NavBar logo */}
          {/* Start Muen  */}
          <Col md={4} >
            <Nav className="menu">
              <Nav.Item>
                <Nav.Link href="/home">
                  <Navbar.Brand>Home</Navbar.Brand>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/home">
                  <Navbar.Brand>Enroll</Navbar.Brand>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home">
                  <Navbar.Brand>Course</Navbar.Brand>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home">
                  <Navbar.Brand>IT News</Navbar.Brand>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home">
                  <Navbar.Brand>Job Oppportunity</Navbar.Brand>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home">
                  <Navbar.Brand>About Us</Navbar.Brand>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
