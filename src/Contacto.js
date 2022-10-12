import React, { useState } from "react";

export const Contacto = () => {
  const [myFullName, setmyFullName] = useState("");
  const [myEmail, setmyEmail] = useState("");
  const [myMsj, setMyMsj] = useState("");
  const [infoValidation, setMyInfoValidation] = useState("");

  const handleChangeMyFullName = (event) => {
    setmyFullName(event.target.value);
  };

  const handleChangeMyEmail = (event) => {
    setmyEmail(event.target.value);
  };

  const handleChangeMyMsj = (event) => {
    setMyMsj(event.target.value);
  };

  const datosEnviados = () => {
    if (myFullName === "") {
      setMyInfoValidation("Ingrese su nombre completo");
    } else if (myEmail === "") {
      setMyInfoValidation("Ingrese su mail");
    } else if (myMsj === "") {
      setMyInfoValidation("ingrese un mensaje valido");
    } else {
      setMyInfoValidation("Mensaje Enviado Exitosamente ");

      console.log("Nombre: " + myFullName);
      console.log("E-mail: " + myEmail);
      console.log("Mensaje: " + myMsj);

      setmyFullName("");
      setmyEmail("");
      setMyMsj("");
    }
  };

  return (
    <div className="contenedor-contacto">
      <h1 className="titulo-contacto">Contacto</h1>
      <div className="name">
        <p className="name">Nombre Completo</p>
        <input
          className="name"
          value={myFullName}
          onChange={handleChangeMyFullName}
        ></input>
      </div>
      <div className="mail">
        <p className="mail">E-mail</p>
        <input
          className="mail"
          value={myEmail}
          onChange={handleChangeMyEmail}
        ></input>
      </div>
      <div className="mensaje">
        <p className="mensaje">Mensaje</p>
        <input
          className="mensaje"
          value={myMsj}
          onChange={handleChangeMyMsj}
        ></input>
      </div>
      <button className="boton-contacto" onClick={datosEnviados}>
        Enviar
      </button>
      <p className="mensaje-enviado">{infoValidation}</p>
    </div>
  );
};
