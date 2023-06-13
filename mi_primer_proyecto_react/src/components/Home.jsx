import React from 'react';
import "./Home.css";

export const Home = () =>{
  return (
    <div className="about">
      <div className="Somos">
      <h1 className="ola">
        <img
        src={require(`../images/logo.png`)}
        alt="Logo"/>
      </h1>
      <h4>
        <ul className='textBox'>
          <li>
          Somos Natural Lunch, un equipo de profesionales modernos en estilo y clásicos en sabor.<br>
          </br>Priorizando la calidad de nuestros productos y convencidos como consumidores de que la experiencia debe resultar completa.
          </li>
        </ul>
      </h4>
      </div>
      <div className="Seguinos">
      <h2>¡Seguinos también en nuestras redes sociales!</h2>
      <table className='social-media'>
        <tr>
          <td className='col-md-1'>
          </td>
            <td className="col-md-1">
              <a href="https://es-la.facebook.com/">
                <img src={require(`../images/face.webp`)} width="100" height="100" alt="Facebook" />
              </a>
            </td>
            <td className="col-md-1">
              <a href="https://www.instagram.com/">
                <img src={require(`../images/174855.png`)} width="70" height="70" alt="Instagram" />
              </a>
            </td>
            <td className="col-md-1">
              <a href="https://www.google.com/maps/place/Universidad+de+Mendoza+Sede+San+Rafael/@-34.6135595,-68.327293,17.31z/data=!4m6!3m5!1s0x967907fb83d8ff41:0xc950900df2c99fb6!8m2!3d-34.61368!4d-68.327453!16s%2Fg%2F1tdx0rv1?hl=es&entry=ttu">
                <img src={require(`../images/google-maps-logo-2-1.png`)} width="70" height="70" alt="googlemaps"/>
              </a>
              <h5>
                ENCONTRANOS!!
              </h5>
          </td>
        </tr>
      </table>
      </div>

      <br />
    </div>
  );
}

