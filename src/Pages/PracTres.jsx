import React from "react";
import { firebase } from '../FireBase'
import Cabezera from "../componets/Cabezera";
import { useLocalStorage } from "../componets/useLocalStorage";

const PracTres = () => {

  const [text, setText] = useLocalStorage('text', '')

  React.useEffect(() =>{
    const ObtenerDatos = async () =>{
      try{
        const db = firebase.firestore()
        const data = await db.collection('PersonajesDeLaTrama').get()
        console.log(data.docs)
      }catch (error){
        console.log(error)
      }
    }
    ObtenerDatos()
  },[])

  return (
    <>
      <Cabezera />
      <h1>PracTres</h1>
      <input
                type="text"
                className="form-control mb-2"
                placeholder="Ingresar Tarea"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
    </>
  );
};

export default PracTres;
