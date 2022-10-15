import React from "react";
import Cabezera from "../componets/Cabezera";

const PageHome = () => {

  const [equipo, setEquipo] = React.useState([])

  React.useEffect(() =>{
    obtenerDatos();
  }, [])
  
  const obtenerDatos = async () =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()
    //console.log(users)
    setEquipo(users)
  }
  return (
    <>
      <Cabezera />
      <h1>Pagina Inicial</h1>
      <h3>Nuestro usuarios actualmente:</h3>
      <ul>
        {
          equipo.map(item =>(
            <li key={item.id}>{item.name} - {item.username}</li>
          ))
        }
      </ul>
    </>
  );
};

export default PageHome;
