import React from 'react'
import {useForm} from "react-hook-form"
import "./Register.scss"
const Register = ( ) => {

  const {
    register,
    handleSubmit,

    formState: { errors, isValid },


  } = useForm();

  const registerUser = (datos) =>{
    console.log(datos);
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
          pattern:{value: /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*_=+-]).{8,12}$/, message:"Introduce una contraseña válida" }  })} ></input>
      </label>

      <label>
      <p className='nacimiento' >Fecha de nacimiento </p> 

        <input name="nacimiento" placeholder='Introduce tu email' type="date" {...register("fecha",{required:true}  )} ></input>
      
      </label>

      {errors.password ?  <p>Error en la contraseña</p> : null}
      <label className='button' >
        <button>Register</button>
      </label>

      </form>
    </div>
  )
}

export default Register