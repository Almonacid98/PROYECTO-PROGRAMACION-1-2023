import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"

export const NavbarBootstrap = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar-container">
      <Navbar.Brand href="./Menu.jsx" className='brand'>
      <img 
        src={require(`../images/logo.png`)}
        width='70'
        height= '70'
        className="d-inline-block align-top"
        alt="Logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className='custom-toggle'/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="./About.jsx">Nosotros</Nav.Link>
          <Nav.Link href="./Carta.jsx">Nuestra Carta</Nav.Link>
          <Nav.Link href="#orden">ORDENA AQUI</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Ingreso" id="basic-nav-dropdown" className="login">
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

