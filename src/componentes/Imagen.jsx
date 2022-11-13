import React from 'react'
import './Imagen.scss'
const Imagen = ({text,imagen, height}) => {
  return (
    <div className='imagen' height={height}>
        <img src={imagen} alt="imagen-cafe" />
        <div className='center'>{text}</div>
    </div>
  )
}

export default Imagen