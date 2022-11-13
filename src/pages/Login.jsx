import React from "react";
import { useForm } from "react-hook-form";
import "./Login.scss";
import { API } from "../services/api";
import Boton from "../componentes/Boton";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const enviar = async (datos) => {
    console.log(datos);
    const resultado = await API.post("/users/login", datos);
    console.log(resultado);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(enviar)}>
        <label>
          <p className="email">Email</p>
          <input
            name="email"
            placeholder="Introduce tu email"
            type="email"
            {...register("email", { required: true })}
          ></input>
        </label>
        <label>
          <p>Contraseña</p>
          <input
            name="password"
            placeholder="Introduce tu contraseña"
            type="password"
            {...register("password", {
              required: "Introduce una contraseña válida",
              pattern: { message: "Introduce una contraseña válida" },
            })}
          ></input>
        </label>
        {errors.password ? <p>Error en la contraseña</p> : null}
        <label className="button">
          <Boton text="Login" />
        </label>
      </form>
    </div>
  );
};

export default Login;
