import React from "react";

const PruebaBoxData = () => {
  const comprasPrendientes = [
    { id: 1, compra: "Botas Chelsea", fecha: "21/09/22", precioEstimado: 600 },
    {
      id: 2,
      compra: "Ajedrez Marvel",
      fecha: "21/09/22",
      precioEstimado: 1600,
    },
    {
      id: 3,
      compra: "Tenis de futbol",
      fecha: "21/09/22",
      precioEstimado: 2100,
    },
    {
      id: 4,
      compra: "Pantalones Negros",
      fecha: "21/09/22",
      precioEstimado: 1000,
    },
  ];

  const [compras, setCompras] = React.useState(comprasPrendientes);

  const agregarElemento = () => {
    console.log('Click')
    setCompras([
        ...compras,
        {id: 5, compra: "Batería para laptop", fecha: "25/09/22", precioEstimado: 800}
    ])
  }

  return (
    <React.Fragment>
      <h3>Lista de pendientes por comprar</h3>
      {compras.map((item, index) => (
        <h4 key={index}>
          {item.id}.-{item.compra} Fecha:{item.fecha} Precio estimado:
          {item.precioEstimado}
        </h4>
      ))}
      <button onClick={() => agregarElemento()}>Agrega Articulo</button>
    </React.Fragment>
  );
};

export default PruebaBoxData;
