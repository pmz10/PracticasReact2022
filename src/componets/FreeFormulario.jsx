import React from "react";

export const FreeFormulario = () => {
  const [articulo, setArticulo] = React.useState("");
  const [fecha, setFecha] = React.useState("");
  const [optencion, setOptencion] = React.useState("");
  const [precio, setPrecio] = React.useState("");
  const [allLista, setAllLista] = React.useState([]);

  const guardarDatos = (e) => {
    e.preventDefault();

    if (!articulo.trim()) {
      console.log("Campo articulo vacío");
      return;
    }

    if (!fecha.trim()) {
      console.log("Campo fecha de deseo vacío");
      return;
    }

    if (!optencion.trim()) {
      console.log("Campo fecha de optención vacío");
      return;
    }

    if (!precio.trim()) {
      console.log("Campo precio vacío");
      return;
    }

    console.log("Procesando datos" + +articulo + fecha + optencion + precio);

    setAllLista([
      ...allLista,
      {
        nombreArticulo: articulo,
        FechaD: fecha,
        FechaO: optencion,
        nombrePrecio: precio,
      },
    ]);

    e.target.reset();
    setArticulo("");
    setFecha("");
    setOptencion("");
    setPrecio("");
  };

  return (
    <React.Fragment>
      <form onSubmit={guardarDatos}>
        <input
          type="text"
          placeholder="Articulo a Obtener"
          className="form-control mb-2"
          onChange={(e) => setArticulo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fecha de deseo"
          className="form-control mb-2"
          onChange={(e) => setFecha(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fecha de optención"
          className="form-control mb-2"
          onChange={(e) => setOptencion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Precio estimado"
          className="form-control mb-2"
          onChange={(e) => setPrecio(e.target.value)}
        />
        <button className="btn btn-primary btn-block" type="submit">
          Agregar
        </button>
      </form>
      <hr />
      <ul>
        {allLista.map((item, index) => (
          <li key={index}>
            {item.nombreArticulo} - {item.FechaD} - {item.FechaO} -{" "}
            {item.nombrePrecio}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
