import React, { useState, useEffect } from "react";
import { ColumnLeft } from "./ColumnLeft";
import { ColumnRight } from "./ColumnRight";
import { Contacto } from "./Contacto";
import { GalleriaDeFoto } from "./GalleriaDeFoto";
import "./index.css";
import { Menu } from "./Menu";

export const Contenedor = () => {
  const [selectedTheme, setSelectedTheme] = useState("blue");
  const [nombreLocalStorage, setNombreLocalStorage] = useState("");
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    // Obteniendo info de LS
    const dataFromLS = localStorage.getItem("DatosIngresados");
    // Guardando tu info en tu State
    setNombreLocalStorage(dataFromLS);
  }, []); // Solo se ejecuta 1 vez

  const handleBlueThemeClick = () => {
    setSelectedTheme("blue");
  };

  const handleRedThemeClick = () => {
    setSelectedTheme("red");
  };

  const handleGreenThemeClick = () => {
    setSelectedTheme("green");
  };

  const toTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const classStyleName = "contenedor " + selectedTheme;

  const enviarDatosUsuario = () => {
    const nombreUsuario = nombre;

    localStorage.setItem("DatosIngresados", nombreUsuario);
    setNombreLocalStorage(nombreUsuario);
    setNombre("");
  };

  const guardarNombres = (event) => {
    setNombre(event.target.value);
  };

  const cerrarSesion = () => {
    localStorage.clear();
    setNombreLocalStorage("");
  };

  let formElement;

  if (nombreLocalStorage === "" || nombreLocalStorage === null) {
    // No hay nada en LS
    formElement = (
      <div className="formulario">
        <p className="nombre-apellido">Nombre y Apellido: </p>
        <input
          className="datos-usuario"
          onChange={guardarNombres}
          value={nombre}
        ></input>
        <button className="enviar-datos" onClick={enviarDatosUsuario}>
          Enviar
        </button>
      </div>
    );
  } else {
    formElement = (
      <div className="segunda-pantalla">
        <p className="nombre-usuario">Hola {nombreLocalStorage}</p>
        <button className="salir" onClick={cerrarSesion}>
          Salir
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="botones">
        <button
          onClick={handleBlueThemeClick}
          focus={selectedTheme}
          className="blue-web"
        >
          blue
        </button>
        <button
          onClick={handleRedThemeClick}
          focus={selectedTheme}
          className="red-web"
        >
          red
        </button>
        <button
          onClick={handleGreenThemeClick}
          focus={selectedTheme}
          className="green-web"
        >
          green
        </button>
      </div>
      <div className={classStyleName}>
        <div className="contenedor-top">
          <div className="logo">
            <h1 className="name-logo">Proyecto JS</h1>
          </div>
          {formElement}
        </div>
        <Menu></Menu>
        <div className="contenedor-galleria">
          <GalleriaDeFoto></GalleriaDeFoto>
        </div>
        <div className="contenedor-columnas">
          <div className="left">
            <ColumnLeft></ColumnLeft>
            <ColumnLeft></ColumnLeft>
            <Contacto></Contacto>
          </div>
          <ColumnRight></ColumnRight>
        </div>
      </div>
      <div className="boton-top">
        <button onClick={toTopButton} className="to-top">
          TOP
        </button>
      </div>
    </>
  );
};
