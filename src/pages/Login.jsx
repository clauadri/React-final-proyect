import React from 'react'
import {useForm} from "react-hook-form"
import "./Login.scss"
import {API} from '../services/api';
const Login = ( ) => {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const enviar =async (datos) =>{
    
    console.log(datos);
    const resultado = await API.post('/users/login', datos)
    console.log(resultado);
    
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
          pattern:{ message:"Introduce una contraseña válida" }  })} ></input>
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