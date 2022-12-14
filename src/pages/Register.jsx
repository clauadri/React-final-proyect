import React from 'react'
import {useForm} from "react-hook-form"
import "./Register.scss"
import {API} from '../services/api';
import Boton from '../componentes/Boton';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nuevoUser } from '../redux/users/user.functions';
const Register = ( ) => {
  
  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm();

  let navigateTo = useNavigate();
  const dispatch= useDispatch();
  console.log(process.env.REACT_APP_BACK_URL);
  const registerUser = async(datos) =>{
      dispatch(nuevoUser(datos , navigateTo))
       
  }

  return (
    <div className='form' >
      <form onSubmit={ handleSubmit(registerUser) } >

      <label>
      <p className='usuariop' >Username</p> 

        <input name="usuario" placeholder='Introduce tu email' type="text" {...register("userName",{required:true}  )} ></input>
      
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

        <input name="nacimiento" placeholder='Introduce tu email' type="date" {...register("fechaNac",{required:true}  )} ></input>
      
      </label>

      {errors.password ?  <p>Error en la contraseña</p> : null}
      <label className='button'>
          <Boton text='Registrarse'/>
      </label>
      </form>
    </div>
  )
}

export default Register