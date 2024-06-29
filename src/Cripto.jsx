const Cripto = ({ name, priceUsd, symbol, changePercent24Hr }) => {
  return (
    <li className="cripto">
      <p>
        <span className="cripto-name">{name}</span>
      </p>
      <p>
        Precio <span> $ {parseFloat(priceUsd).toFixed(4)}</span>
      </p>

      <p>
        Código: <span>{symbol}</span>
      </p>
      <p>
        Var. 24hrs:
        <span className={changePercent24Hr > 0 ? "cripto-up" : "cripto-down"}>
          {parseFloat(changePercent24Hr).toFixed(3)} %
        </span>
      </p>
    </li>
  );
};

export default Cripto;
