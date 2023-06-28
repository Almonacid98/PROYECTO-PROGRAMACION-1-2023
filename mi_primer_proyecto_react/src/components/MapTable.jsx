import React, { useState } from 'react';
import './MapTable.css';

// Importa las imágenes de las mesas (asegúrate de tener las imágenes correspondientes en tu proyecto)
import mesaDisponibleImg from '../images/comida-rapida-casera.jpg';
import mesaNoDisponibleImg from '../images/comida-rapida-casera.jpg';
import mesaSeleccionadaImg from '../images/comida-rapida-casera.jpg';

export const TableMap = () => {
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);

  const mesas = [
    [true, false, true],
    [true, true, false],
    [false, true, true],
    // ...agrega más filas y columnas según tus necesidades
  ];

  const seleccionarMesa = (fila, columna) => {
    setMesaSeleccionada({ fila, columna });
  };

  return (
    <div className='contenedor-matriz'>
      <div className="fila-mesas">
        {mesas.map((fila, indiceFila) => (
          <React.Fragment key={indiceFila}>
            {fila.map((disponible, indiceColumna) => (
              <img
                key={indiceColumna}
                src={disponible ? mesaDisponibleImg : mesaNoDisponibleImg}
                alt={`Mesa ${indiceFila}-${indiceColumna}`}
                className={`mesa ${mesaSeleccionada?.fila === indiceFila && mesaSeleccionada?.columna === indiceColumna ? 'seleccionada' : ''}`}
                onClick={() => seleccionarMesa(indiceFila, indiceColumna)}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
      {mesaSeleccionada && (
        <p>Mesa seleccionada: {mesaSeleccionada.fila}-{mesaSeleccionada.columna}</p>
      )}
    </div>
  );
};