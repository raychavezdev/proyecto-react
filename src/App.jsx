import { useEffect, useState } from "react";
import axios from "axios";
import Cripto from "./Cripto"
import "./App.css"
function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [criptos, setCriptos] = useState();

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data);
      })
      .catch(() => {
        console.error("La peticion fallo");
      });
  }, []);

  if (!criptos)
    return (
      <>
        <span>Cargando...</span>
      </>
    );

  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <ul className="cripto-grid">
        {criptos.map(({id, name, priceUsd },i) => (
         <Cripto index={i} key={id} name={name} priceUsd={priceUsd}/>
        ))}
      </ul>
    </>
  );
}

export default App;
