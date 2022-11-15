import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Boton from "../componentes/Boton";
import {createClothes} from '../redux/ropa/ropa.functions'
import './CreateRopa.scss'
const CreateRopa = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm();

  let navigateTo = useNavigate();
  const dispatch = useDispatch();

  const newClothes = async(datos) =>{
    const formData = new FormData();
    formData.append("tipo", datos.tipo);
    formData.append("color", datos.color);
    formData.append("precio", datos.precio);
    formData.append("imagen", datos.imagen[0]);
    formData.append("talla", datos.talla);
    dispatch(createClothes(formData , navigateTo))
    
}

  return (
    <div className='form'>
    <form onSubmit={ handleSubmit(newClothes) }>
        <label>
            <p>Tipo de ropa</p>
            <input type="text" name="tipo" {...register("tipo",{required:true})}/>
        </label>
        <label>
            <p>Color</p>
            <input type="text" name="color"{...register("color",{required:true})}/>
        </label>
        <label>
            <p>Precio</p>
            <input type="number" name="precio"{...register("precio",{required:true})}/>
        </label>
        <label>
            <p>Imagen</p>
            <input type="file" name="imagen"{...register("imagen",{required:true})}/>
        </label>
        <label>
            <p>Talla</p>
            <input type="text" name="talla"{...register("talla",{required:true})}/>
        </label>
        <label className='button'>
          <Boton text='Crear'/>
      </label>

    </form>
  </div>
  )
  
};

export default CreateRopa;
