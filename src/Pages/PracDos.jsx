import React from "react";
import { nanoid } from "nanoid";
import Cabezera from "../componets/Cabezera";

const PracDos = () => {
  const [tarea, setTarea] = React.useState("");
  const [tareas, setTareas] = React.useState([]);

  //

  const agregarTarea = (e) => {
    e.preventDefault();
    console.log(tarea);
    if (!tarea.trim()) {
      console.log("Elemento vacío");
      return;
    }

    setTareas([...tareas, { id: nanoid(), NombreTarea: tarea }]);
    setTarea("");
  };

  return (
    <React.Fragment>
      <Cabezera />
      <div className="container-can mt-5">
        <h1>PracDos - Crud Simple</h1>
        <hr />
        <div className="row">
          <div className="col-8">
            <h4 className="text-center">Lista de Tareas</h4>
            <ul className="list-group">
              {tareas.map(items => (
                <li className="list-group-item" key={items.id}>
                  <span className="lead">{items.id}-{items.NombreTarea}</span>
                  <button className="btn btn-danger btn-sm float-right mx-2">
                    Elimnar
                  </button>
                  <button className="btn btn-warning btn-sm float-right">
                    Editar
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-4">
            <h4 className="text-center">Creador de Tareas</h4>
            <form onSubmit={agregarTarea}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Ingresar Tarea"
                onChange={(e) => setTarea(e.target.value)}
                value={tarea}
              />
              <button className="btn btn-dark btn-block" type="submit">
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PracDos;
