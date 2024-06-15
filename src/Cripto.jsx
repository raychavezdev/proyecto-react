const Cripto = ({index,name,priceUsd}) => {
  return (
    <li className="cripto" >

      <span>{name}</span>
      <span> $ {priceUsd}</span>
    </li>
  );
};


export default Cripto