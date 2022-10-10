import React from "react";
import { useParams } from "react-router-dom";

const DetallesPosicion = () => {
  const { position } = useParams();
  return <h1>Caracteristicas de la Posición: {position} </h1>;
};

export default DetallesPosicion;
