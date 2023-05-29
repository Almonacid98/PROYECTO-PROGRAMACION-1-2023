import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavbarBootstrap = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
      <img 
        src={require(`../images/logo.png`)}
        width="50"
        height="500"
        className="d-inline-block align-top"
        alt="Logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Características</Nav.Link>
          <Nav.Link href="#pricing">Precios</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#login">Iniciar sesión</Nav.Link>
          <Nav.Link href="#signup">Registrarse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
