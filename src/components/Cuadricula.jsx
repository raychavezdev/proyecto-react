import Cripto from "./cripto/Cripto";
import "./Cuadricula.css";
import usePetition from "../hooks/usePetition";

function Cuadricula() {
  const [criptos,loadCriptos] = usePetition("assets");

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
        {criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }, i) => (
          <Cripto
            index={i}
            key={id}
            name={name}
            priceUsd={priceUsd}
            symbol={symbol}
            changePercent24Hr={changePercent24Hr}
            id={id}
          />
        ))}
      </ul>
    </>
  );
}

export default Cuadricula;
