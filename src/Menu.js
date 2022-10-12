import React from "react";
import Collapsible from "react-collapsible";

export const Menu = () => {
  return (
    <div className="menu">
      <ol>
        <li>Inicio</li>
        <li><button className="reloj">Reloj</button></li>
        <li>
          <Collapsible trigger="Sobre Mi">
            <button className="sobre-mi">Estudios</button>
            <button className="sobre-mi">Carrera</button>
            <button className="sobre-mi">Vida Personal</button>
          </Collapsible>
        </li>
        <li>Contacto</li>
      </ol>
    </div>
  );
};
