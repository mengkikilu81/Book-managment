import { Container, Navbar } from "react-bootstrap"
import '../assets/css/MyNavbar.css' 
const MyNavbar=()=>{
    return(
        <Navbar  variant="dark" className="color">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://www.istad.co/resources/img/logo_md.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        ISTAD
      </Navbar.Brand>
    </Container>
    <Container className="px-1">
    <Navbar.Brand href="#" className="p=0">Home</Navbar.Brand>
    <Navbar.Brand href="#home" >Enroll</Navbar.Brand>
    <Navbar.Brand href="#home" >Course</Navbar.Brand>
    <Navbar.Brand href="#home">IT News</Navbar.Brand>
    <Navbar.Brand href="#home">Job Opportunity</Navbar.Brand>
    <Navbar.Brand href="#home">About Us</Navbar.Brand>
    </Container>

  </Navbar>
    )
}
export default MyNavbar