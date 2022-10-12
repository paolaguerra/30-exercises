import React from "react";
import "./index.css";
import MyImage from "./img/foto.png";
import Clock from "./Clock";

export const ColumnRight = () => {
  return (
    <>
      <div className="right">
        <h3 className="titulo">Prueba 1</h3>
        <img src={MyImage}></img>
        <p className="texto-foto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
        <div className="reloj-section">
          <h3>Reloj</h3>
          <Clock></Clock>
        </div>
      </div>
    </>
  );
};
