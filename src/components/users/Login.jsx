const Login = ()=>{
    return(

        <div className="login-container">
            <form>
                <div className="field">
                    <label htmlFor="email">Correo Electronico</label>
                    <input type="email" name="email"/>
                </div>
                <div className="field">
                    <label htmlFor="pasword">Contraseña</label>
                    <input type="password" name="password"/>
                </div>
                <div className="submit">
                    <input type="submit" value="Ingresar" />
                </div>
            </form>
        </div>

    )
}

export default Login