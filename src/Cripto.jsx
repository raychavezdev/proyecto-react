const Cripto = ({index,name,priceUsd}) => {
  return (
    <li>
     {index+1}  Nombre: {name} ----- Precio: {priceUsd}
    </li>
  );
};


export default Cripto