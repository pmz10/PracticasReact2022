import React from "react";
import { Link } from "react-router-dom";
import Cabezera from "../componets/Cabezera";

const PracSeis = () => {
  const SoccerPositions = [
    "Portero",
    "Lateral por derecha",
    "Defensa central",
    "Lateral por izquierda",
    "Pivote",
    "Enganche",
    "Interior",
    "Volante",
    "Extremo",
    "Delantero centro",
  ];
  return (
    <>
      <Cabezera />
      <h1>Soccer Positions</h1>
      <ul>{SoccerPositions.map(position => (
        <li key={position}><Link to={`/posicion/${position}`}>{position}</Link> </li>
      ))}
      </ul>
    </>
  );
};

export default PracSeis;
