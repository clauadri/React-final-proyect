import React from 'react'
import {useForm} from "react-hook-form"
import "./Login.scss"
const Login = ( ) => {

  const {
    register,
    handleSubmit,

    formState: { errors, isValid },


  } = useForm();

  const enviar = (datos) =>{
    console.log(datos);
  }

  return (
    <div className='form' >
      <form onSubmit={ handleSubmit(enviar) } >
  
      <label>
      <p className='usuario' >Email</p> 

        <input name="Email" placeholder='Introduce tu email' type="text" {...register("usuario",{required:true}  )} ></input>
      
      </label>
      <label>
        <p>Contraseña</p> 
        <input name='password' placeholder='Introduce tu contraseña' type="password"
         {...register("password",{
          required:"Introduce una contraseña válida" , 
          pattern:{value: /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*_=+-]).{8,12}$/, message:"Introduce una contraseña válida" }  })} ></input>
      </label>
      {errors.password ?  <p>Error en la contraseña</p> : null}
      <label className='button' >
        <button>Login</button>
      </label>

      </form>
    </div>
  )
}

export default Login