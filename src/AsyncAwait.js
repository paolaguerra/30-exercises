import React, { useEffect, useState } from "react";

export const PrimerEjercicio = () => {

  const [datosPantalla, setDatosPantalla] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setDatosPantalla(data);
      console.log(data);
    };

    loadPost();
    return () => {};
  }, []);

  return (
    <div>
    {datosPantalla.map((dato) => {
      return (
        <h1>{dato.title}</h1>
      );
    })}
    </div>
  );
};