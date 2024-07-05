const CriptoInfo = ({cripto}) => {
  return (
    <div className="info">
      <p>
        <span className="cripto-name">{cripto.name}</span>
      </p>
      <p>
        Precio <span> $ {parseFloat(cripto.priceUsd).toFixed(4)}</span>
      </p>

      <p>
        Código: <span>{cripto.symbol}</span>
      </p>
      <p>
        Var. 24hrs:
        <span
          className={cripto.changePercent24Hr > 0 ? "cripto-up" : "cripto-down"}
        >
          {parseFloat(cripto.changePercent24Hr).toFixed(3)} %
        </span>
      </p>
    </div>
  );
};

export default CriptoInfo
