import React from "react";
import { useParams } from "react-router-dom";
import Cabezera from "../componets/Cabezera";

const Posiciones = () => {
  const { position } = useParams();
  return (
    <div>
        <Cabezera />
      <h3>Tu Posicion es:</h3>
      <h1>{position}</h1>
    </div>
  );
};

export default Posiciones;
