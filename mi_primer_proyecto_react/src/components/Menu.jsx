import { useState } from 'react';
import "./Menu.css";

export const Menu = () =>{
  const [open, setOpen] = useState(false);

  return (
    <div className="menu">
      <h1>Formulario de Registro de Clientes</h1>
      <div className="container">
        <form action="/formulario" method="get">
        <label htmlFor="nombre y apellido">Nombre y Apellido</label>
        <input type="text" id="nombre y apellido" name="nombre y apellido" placeholder="Ingresar nombre y apellido" style={{ backgroundColor: 'rgb(95, 42, 6)', opacity: 0.9 }} />
        <br />
        <label htmlFor="Pedido">Pedido</label>
        <input type="text" id="Pedido" name="Pedido" placeholder="Ingresar Pedido" style={{ backgroundColor: 'rgb(95, 42, 6)', opacity: 0.9 }} />
        <br />
        <textarea cols="35" rows="15" style={{ backgroundColor: 'rgb(95, 42, 6)', opacity: 0.9 }}>comentario</textarea>
        <br />
        <input type="submit" style={{ backgroundColor: '#a41414', opacity: 0.8 }} />
        </form>
      </div>
      <br />

      <a name="Somos">
      <h1>Somos</h1>
      <h4>
        <ul>
          <li>Un equipo de profesionales que hemos creado el restaurante donde nos gustaría comer a diario y en las ocasiones especiales. Con menú o a la carta. Con amigos o con clientes, con tiempo para disfrutar o con algo más de prisa porque el trabajo lo requiere.</li>
          <li>Modernos en el estilo y clásicos en el sabor.</li>
          <li>Firmes defensores de que calidad no está en el precio, sino en el producto.</li>
          <li>Exigentes porque también somos consumidores y estamos convencidos de que la experiencia debe resultar completa.</li>
          <li>Un buen restaurante ha de serlo por la comida, pero también por el trato y el entorno, por la decoración y el ambiente.</li>
          <li>Somos nuevos, pero también somos expertos. Natural Lunch, nuestro restaurante, nos ha permitido crecer y creer. Sabemos más y queremos demostrarlo.</li>
        </ul>
      </h4>
      </a>

      <a name="Seguinos">
      <h2>¡Seguinos también en nuestras redes sociales!</h2>
      <table>
        <tr>
          <td className="col-md-1">
            <a href="https://es-la.facebook.com/" target="_blank">
              <img src={require(`../images/face.webp`)} width="100" height="100" alt="Facebook" />
            </a>
          </td>
          <td className="col-md-1">
            <a href="https://www.instagram.com/" target="_blank">
              <img src={require(`../images/174855.png`)} width="70" height="70" alt="Instagram" />
            </a>
          </td>
          <td className="col-md-1">
            <a href="https://twitter.com/?lang=es" target="_blank">
              <img src={require(`../images/red.png`)} width="70" height="70" alt="Twitter" />
            </a>
          </td>
        </tr>
      </table>
      </a>

      <br />
    </div>
  );
}

