import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState()

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null)
    axios
      .post(`https://reqres.in/api/login`, user)
      .then((data) => {
        setLoading(false);
        localStorage.setItem("tokenEDmarket", data.data.token);
        navigation("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err.response.data.error)
      });
  };

  if (localStorage.getItem("tokenEDmarket")) return <Navigate to={"/"} />;

  return (
    <div className="login-container">
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Correo Electronico</label>
          <input
            type="email"
            name="email"
            required
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className="field">
          <label htmlFor="pasword">Contraseña</label>
          <input
            type="password"
            name="password"
            required
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
          />
        </div>
        <div className="submit">
          <input type="submit" value={loading ? "loading..." : "Ingresar"} />
        </div>
      </form>
      {error && <span className="error">{`Error: ${JSON.stringify(error)}`}</span>}
    </div>
  );
};

export default Login;
