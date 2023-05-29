import React from 'react';
import './SignUp.css'; 

export const SignUp = () => {
  return (
    <div className="register-section">
      <div className="register-form">
        <h2>Registrarse</h2>
        <form>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo electrónico" />
          <input type="number" placeholder="Telefono"/>
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

