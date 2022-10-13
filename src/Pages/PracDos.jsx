import React from "react";
import { nanoid } from "nanoid";
import Cabezera from "../componets/Cabezera";

const PracDos = () => {
  const [tarea, setTarea] = React.useState("");
  const [tareas, setTareas] = React.useState([]);
  const [modoEdicion, setModoEdicion] = React.useState(false);
  const [id, setId] = React.useState("");
  const [error, setError] = React.useState(null)

  //

  const agregarTarea = (e) => {
    e.preventDefault();
    console.log(tarea);
    if (!tarea.trim()) {
      console.log("Elemento vacío");
      setError('Espacio vacío. Escriba los datos deseados por favor')
      return;
    }

    setTareas([...tareas, { id: nanoid(), NombreTarea: tarea }]);
    setTarea("");
    setError(null)
  };

  const eliminarTarea = (id) => {
    const arrayFiltrado = tareas.filter((items) => items.id !== id);
    setTareas(arrayFiltrado);
  };

  const editar = (items) => {
    console.log(items);
    setModoEdicion(true);
    setTarea(items.NombreTarea);
    setId(items.id);
  };

  const editarTarea = (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      console.log("Campo vacío");
      setError('Espacio vacío. Escriba los datos deseados por favor')
      return;
    }

    const arrayEditado = tareas.map((item) =>
      item.id === id ? { id, NombreTarea: tarea } : item
    );
    setTareas(arrayEditado)
    setModoEdicion(false);
    setTarea('');
    setId('');
    setError(null)
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
              {
                tareas.length === 0 ? (
                  <li className="list-group-item">No hay tareas</li>
                ) : (
                  tareas.map((items) => (
                    <li className="list-group-item" key={items.id}>
                      <span className="lead">
                        {items.id}-{items.NombreTarea}
                      </span>
                      <button
                        className="btn btn-danger btn-sm float-right mx-2"
                        onClick={() => eliminarTarea(items.id)}
                      >
                        Elimnar
                      </button>
                      <button
                        className="btn btn-warning btn-sm float-right"
                        onClick={() => editar(items)}
                      >
                        Editar
                      </button>
                    </li>
                  ))
                )
              }
            </ul>
          </div>
          <div className="col-4">
            <h4 className="text-center">
              {modoEdicion ? "Editor de Tarea" : "Creador de Tareas"}
            </h4>
            <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
              {
                error ? <span className="text-danger">{error}</span> : null
              }
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Ingresar Tarea"
                onChange={(e) => setTarea(e.target.value)}
                value={tarea}
              />
              {modoEdicion ? (
                <button className="btn btn-warning btn-block" type="submit">
                  Editado
                </button>
              ) : (
                <button className="btn btn-dark btn-block" type="submit">
                  Agregar
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PracDos;
