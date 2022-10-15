import React from "react";
import { Link } from "react-router-dom";

const Cabezera = () => {
  return (
    <div>
      <head>
        <nav>
          <ul>
            <li><Link to='/PracUno' className="btn btn0dark">Practica Uno</Link></li>
            <li><Link to='/PracDos' className="btn btn0dark">Practica Dos</Link></li>
            <li><Link to='/PracTres' className="btn btn0dark">Practica Tres</Link></li>
            <li><Link to='/PracCuatro' className="btn btn0dark">Practica Cuatro</Link></li>
            <li><Link to='/PracCinco' className="btn btn0dark">Practica Cinco</Link></li>
            <li><Link to='/PracSeis' className="btn btn0dark">Practica Seis</Link></li>
          </ul>
        </nav>
      </head>
    </div>
  );
};

export default Cabezera;
