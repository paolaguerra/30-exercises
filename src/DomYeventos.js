import React, { useState } from "react";
import "./index.css";

export const PrimerEjercicio = () => {
  const [nombre, setMyNombre] = useState("");
  const [apellido, setMyApellido] = useState("");
  const [edad, setMyEdad] = useState("");
  const [datos, setMyDatos] = useState("");

  const guardarNombre = (event) => {
    setMyNombre(event.target.value);
  };

  const guardarApellido = (event) => {
    setMyApellido(event.target.value);
  };

  const guardarEdad = (event) => {
    setMyEdad(event.target.value);
  };

  const guardarDatos = () => {
    if (isNaN(edad)) {
      console.error("ingrese un numero valido");
    } else if (nombre === "" || apellido === "" || edad === "") {
      console.error("No dejar campos vacios");
    } else {
      setMyDatos(
        "Nombre: " + nombre + " Apellido: " + apellido + " Edad: " + edad
      );
    }
  };

  return (
    <>
      <div>
        <input
          className="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={guardarNombre}
        ></input>
        <input
          className="apellido"
          placeholder="Apellido"
          value={apellido}
          onChange={guardarApellido}
        ></input>
        <input
          className="edad"
          placeholder="Edad"
          value={edad}
          onChange={guardarEdad}
        ></input>
      </div>
      <button className="boton" onClick={guardarDatos}>
        Enviar
      </button>
      <p className="datos">{datos}</p>
    </>
  );
};
