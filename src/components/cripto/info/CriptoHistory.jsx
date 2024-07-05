const CriptoHistory = ({history}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {history.map(({ date, priceUsd }, i) => (
          <tr key={i}>
            <td>{date}</td>
            <td>{priceUsd}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default CriptoHistory;
