import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../imgs/main_logo.jpeg'
import '../css/header.css';

function BasicExample() {
  return (
    <Navbar class= 'header' expand="lg" className="bg-body">
      <Container>
        <Navbar.Brand href="#home"><img class = "logo" src={Logo} alt="Main Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#players">Players</Nav.Link>
            <Nav.Link href="#national-team">National Team</Nav.Link>
            <Nav.Link href="#application">Prospective Players</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;