import React from 'react'
import {FaFacebook, FaInstagram, FaSoundcloud, FaFlag } from 'react-icons/fa'
import './Footer.scss'
const Footer = ({text}) => {
  return (
    <div className='footer'>
        <div>
          <FaFlag/>
        </div>
        <div>
          <p>{text}</p>
        </div>
        <div className='iconos'>
            <a href="https://www.instagram.com/wemotoclothing/"><FaInstagram/></a>
            <a href="https://www.facebook.com/wemotoclothing"><FaFacebook/></a>
            <a href="https://soundcloud.com/wemoto"><FaSoundcloud/></a>
        </div>
    </div>
  )
}

export default Footer