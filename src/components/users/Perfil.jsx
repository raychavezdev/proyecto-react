import { useContext } from "react";
import { userContext } from "/src/components/context/UserContext";

const Perfil = () => {

  const user = useContext(userContext)


  return (
    <div>
      <h1>Perfil de {user.name}</h1>
      <div>Usuario desde {user.registered}</div>
    </div>
  );
};

export default Perfil