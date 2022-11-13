import React from 'react'
import './Imagen.scss'
const Imagen = ({text,imagen, altura, size}) => {
  return (
    <div style={{width:size, height:altura}} className='imagen'   >
        <img src={imagen} alt="imagen-cafe" />
        <div className='center'>{text}</div>
    </div>
  )
}

export default Imagen