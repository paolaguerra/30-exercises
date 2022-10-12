import React from "react";
import Data from "./Data.json";

export const DataJson = () => {

  return (
    <div>
      {Data.map((dato) => {
        return <h1 key={dato.id}>{dato.body}</h1>;
      })}
    </div>
  );
};
