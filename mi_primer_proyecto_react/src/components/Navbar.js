import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"

export const NavbarBootstrap = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
      <img 
        src={require(`../images/logo.png`)}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="Logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="./Menu.jsx">Nosotros</Nav.Link>
          <Nav.Link href="./Carta.jsx">Nuestra Carta</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Ingreso" id="basic-nav-dropdown">
            <NavDropdown.Item href="../components/LoginSignUp/Login.jsx">Iniciar Sesion</NavDropdown.Item>
            <NavDropdown.Item href="../components/LoginSignUp/SignUp.jsx">Registrarse</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='#cart'>
            <img 
              src={require(`../images/cart_transparent.png`)}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Cart"
            />
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

