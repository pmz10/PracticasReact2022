import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import Cabezera from "../componets/Cabezera";
import DetallesPosicion from "../componets/DetallesPosicion";

const Posiciones = () => {
  const { position } = useParams();
  return (
    <React.Fragment>
      <Cabezera />
      <Outlet />
      <h3>Tu Posicion es:</h3>
      <DetallesPosicion />
      <h1>{position}</h1>\<Link to="details">Ir a los Detalles</Link>
    </React.Fragment>
  );
};

export default Posiciones;
