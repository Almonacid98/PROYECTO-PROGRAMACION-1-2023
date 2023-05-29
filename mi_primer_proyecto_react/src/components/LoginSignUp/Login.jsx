import React from 'react';
import './Login.css';
export const Login = () => {
  return (
    <div className="login-section">
      <div className="login-form">
        <h2>Iniciar sesión</h2>
        <form>
          <input type="text" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}