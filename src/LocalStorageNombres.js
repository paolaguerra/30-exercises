import React, { useState } from "react";

export const PrimerEjercicio = () => {
  const [nombre, setNombre] = useState("");
  const [datos, setMyDatos] = useState("");

  const guardarNombres = (event) => {
    setNombre(event.target.value);
  };

  const enviarNombre = () => {
    console.log(nombre);
    // Local Storage

    const ListaNombres = localStorage.getItem("Nombre");
    let nombreParaLS = "";

    if (ListaNombres === null) {
      nombreParaLS = nombre;
    } else {
      nombreParaLS = ListaNombres + ", " + nombre;
    }

    setMyDatos(nombreParaLS);

    localStorage.setItem("Nombre", nombreParaLS);

    setNombre("");
    console.log(localStorage);
  };

  const borrarNombre = () => {
    let newArray = datos.split(",");
    newArray.pop();
    // ACTUALIZAR EL LOCAL STORAGE
    localStorage.setItem("Nombre", newArray);
    console.log(newArray);
    let arrayToString = newArray.join(",");
    setMyDatos(arrayToString);
  };

  return (
    <>
      <div>
        Name: <input value={nombre} onChange={guardarNombres}></input>
        <button onClick={enviarNombre}>Enviar</button>
      </div>
      <p>Nombre: {datos}</p>
      <button onClick={borrarNombre}>Borrar</button>
    </>
  );
};
