
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import MyFristComponent from './Components/MyFristComponent';
import MyCard from './Components/MyCard';
import MyNavbar from './Components/MyNavbar';

function App() {
  const data=[
    "kai",
    "king",
    "quessn",
    1,  
  ]
  return (
<div className='App'>
  <Container fluid className='p-0'>
    <MyNavbar/>
  </Container>
<Container>
      <Row>
        <Col>
          <MyFristComponent />
        </Col>
      </Row>
      <Row className='g-3'>
      {
        data.map(d=> (
          <Col md={6}>
          <MyCard />
        </Col>)
        )
      }
      </Row>
    </Container> 
    <User/>
</div>
    
  );
}

export default App;
