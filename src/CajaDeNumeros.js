import React, { useState } from "react";
import "./index.css";

export const PrimerEjercicio = () => {
  const [myTextUno, setmyTextUno] = useState("");
  const [myTextDos, setmyTextDos] = useState("");
  const [result01, setMyResult01] = useState("");
  const [result02, setMyResult02] = useState("");
  const [result03, setMyResult03] = useState("");
  const [numeroValido, setMyNumeroValido] = useState(
    "Ingrese un numero en cada caja"
  );

  const numeroPrimero = (event) => {
    setmyTextUno(event.target.value);
  };

  const numeroSegundo = (event) => {
    setmyTextDos(event.target.value);
  };

  const ejecutarComparacion = () => {
    if (isNaN(myTextUno) || isNaN(myTextDos)) {
      setMyNumeroValido("Ingrese numeros validos");
    } else if (myTextDos <= 0 || myTextUno <= 0) {
      setMyNumeroValido("Ingrese un numero igual o mayor que 1");
    } else if (myTextDos > myTextUno) {
      setMyResult01("El numero mayor es: " + myTextDos);
      setMyResult02("El numero menor es: " + myTextUno);
    } else if (myTextUno > myTextDos) {
      setMyResult01("El numero mayor es: " + myTextUno);
      setMyResult02("El numero menor es " + myTextDos);
    } else {
      setMyResult03("Los numeros son iguales");
    }
  };

  return (
    <div>
      <p>{numeroValido}</p>
      <input
        onChange={numeroPrimero}
        value={myTextUno}
        className="primer-numero"
        placeholder="0"
      ></input>
      <input
        onChange={numeroSegundo}
        value={myTextDos}
        className="segundo-numero"
        placeholder="0"
      ></input>
      <button onClick={ejecutarComparacion}>Comparar</button>
      <p>{result01}</p>
      <p>{result02}</p>
      <p>{result03}</p>
    </div>
  );
};