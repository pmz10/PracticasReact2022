import React from "react";
import { Link } from "react-router-dom";

const Cabezera = () => {
  return (
    <div>
      <head>
        <nav>
          <ul>
            <li><Link to='/PracUno'>Practica Uno</Link></li>
            <li><Link to='/PracDos'>Practica Dos</Link></li>
            <li><Link to='/PracTres'>Practica Tres</Link></li>
            <li><Link to='/PracCuatro'>Practica Cuatro</Link></li>
            <li><Link to='/PracCinco'>Practica Cinco</Link></li>
            <li><Link to='/PracSeis'>Practica Seis</Link></li>
          </ul>
        </nav>
      </head>
    </div>
  );
};

export default Cabezera;
