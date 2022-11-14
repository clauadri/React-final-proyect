import React from "react";
import { useForm } from "react-hook-form";
import "./Login.scss";
import { API } from "../services/api";
import Boton from "../componentes/Boton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/users/user.functions";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  let navigateTo = useNavigate();
  const dispatch = useDispatch();

  const enviar = async (datos) => {
    dispatch(loginUser(datos,navigateTo))
    
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
            {...register("email", { 
              required: "Introduce un email, por favor",
            minLength: {
                value: 2,
                message: "el email tiene que ser mas largo"
            },
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ,
                message: "Introduce un email con formato valido"
            }
              
               })}
          ></input>
        </label>
        {errors.email ? <>
        {errors.email.type === "required" && <p>{errors.email.message}</p>}
        {errors.email.type === "minLength" && <p>{errors.email.message}</p>}
        {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
      </> : null}

        <label>
          <p>Contraseña</p>
          <input
            name="password"
            placeholder="Introduce tu contraseña"
            type="password"
            {...register("password", {
              required: "Introduce una contraseña válida",
              pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
            })}
          ></input>
        </label>
        {errors.password ? <p>Error en la contraseña</p> : null}
        <label className="button">
          <Boton text="Login" disabled={!isValid} />
        </label>
      </form>
    </div>
  );
};

export default Login;
