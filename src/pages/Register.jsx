import React from 'react'
import {useForm} from "react-hook-form"
import "./Register.scss"
import {API} from '../services/api';
const Register = ( ) => {

  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm();

  const registerUser = async(datos) =>{
    
    const resultado = await API.post('users/register', datos)
      
    console.log(resultado);
  }

  return (
    <div className='form' >
      <form onSubmit={ handleSubmit(registerUser) } >

      <label>
      <p className='usuario' >Username</p> 

        <input name="usuario" placeholder='Introduce tu email' type="text" {...register("usuario",{required:true}  )} ></input>
      
      </label>
  
      <label>
      <p className='Email' >Email</p> 

        <input name="Email" placeholder='Introduce tu email' type="email" {...register("email",{required:true}  )} ></input>
      
      </label>
      <label>
        <p className='contra' >Contraseña</p> 
        <input name='password' placeholder='Introduce tu contraseña' type="password"
         {...register("password",{
          required:"Introduce una contraseña válida" , 
          pattern:{ message:"Introduce una contraseña válida" }  })} ></input>
      </label>

      <label>
      <p className='nacimiento' >Fecha de nacimiento </p> 

        <input name="nacimiento" placeholder='Introduce tu email' type="date" {...register("fecha",{required:true}  )} ></input>
      
      </label>

      {errors.password ?  <p>Error en la contraseña</p> : null}
      <label className='button' >
        <button disabled={!isValid}>Register</button>
      </label>

      </form>
    </div>
  )
}

export default Register