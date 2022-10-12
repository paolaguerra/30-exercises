import React, { useState } from "react";

export const PrimerEjercicio = () => {
  const [primerValor, setMyPrimerValor] = useState("");
  const [segundoValor, setMySegundoValor] = useState("");
  const [myResult, setMyResult] = useState("");

  const numeroPrimero = (event) => {
    setMyPrimerValor(event.target.value);
  };

  const numeroSegundo = (event) => {
    setMySegundoValor(event.target.value);
  };

  const obtenerNumeros = () => {
    if (primerValor < segundoValor) {
      for (let i = primerValor; i <= segundoValor; i++)
        if (i % 2 === 1) {
          setMyResult(document.write(i));
        }
    }
    if (primerValor > segundoValor) {
      for (let i = primerValor; i >= segundoValor; i--)
        if (i % 2 === 1) {
          setMyResult(document.write(i));
        }
    }
  };

  return (
    <div>
      <p>Introducir 2 Numeros:</p>

      <input
        className="primer-numero"
        value={primerValor}
        onChange={numeroPrimero}
      ></input>

      <input
        className="segundo-numero"
        value={segundoValor}
        onChange={numeroSegundo}
      ></input>

      <button onClick={obtenerNumeros}>Enviar</button>

      <p>{myResult}</p>
    </div>
  );
};
