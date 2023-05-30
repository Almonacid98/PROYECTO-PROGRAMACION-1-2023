import { useState } from 'react';
import "./Menu.css";

export const Menu = () =>{
  const [open, setOpen] = useState(false);

  return (
    <div className="about">
      <div className="Somos">
      <h1 className='ola'>
        <img
        src={require(`../images/logo.png`)}
        alt="Logo"/>
      </h1>
      <h4>
        <ul className='textBox'>
          <li>
          Somos Natural launch, un equipo de profesionales modernos en estilo y clásicos en sabor.<br>
          </br>Priorizando la calidad de nuestros productos y convencidos como consumidores de que la experiencia debe resultar completa.
          </li>
        </ul>
      </h4>
      </div>
      <div className="Seguinos">
      <h2>¡Seguinos también en nuestras redes sociales!</h2>
      <table>
        <tr>
          <td className='col-md-1'>
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
          </td>
        </tr>
      </table>
      </div>

      <br />
    </div>
  );
}

