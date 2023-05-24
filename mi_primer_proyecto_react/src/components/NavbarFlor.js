import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

export const NavbarFlor = () => {
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" data-bs-theme="dark" >
            <a className="navbar-brand" href="#" ></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="quienesSomos.html">Quienes somos</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Clientes
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">cliente 1</a>
                            <a className="dropdown-item" href="#">cliente 2</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contacto.html">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="login.html">Iniciar sesion</a>
                    </li>
    
                </ul>
            </div>
        </nav> 
}