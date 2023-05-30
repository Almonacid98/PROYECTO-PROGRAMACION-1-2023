import React from 'react';
import './Carta.css'; // Importa el archivo CSS

export const Carta = () =>{
  return (
    <div className="cart">
      <h2>Menú del Restaurante</h2>
      <div className="cart-section">
        <h3>Entradas</h3>
        <ul>
          <li>Entrada 1</li>
          <li>Entrada 2</li>
          <li>Entrada 3</li>
        </ul>
      </div>
      <div className="cart-section">
        <h3>Platos Principales</h3>
        <ul>
          <li>Plato Principal 1</li>
          <li>Plato Principal 2</li>
          <li>Plato Principal 3</li>
        </ul>
      </div>
      <div className="cart-section">
        <h3>Postres</h3>
        <ul>
          <li>Postre 1</li>
          <li>Postre 2</li>
          <li>Postre 3</li>
        </ul>
      </div>
    </div>
  );
}