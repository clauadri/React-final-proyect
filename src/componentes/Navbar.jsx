import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Boton from './Boton'
import { BotonLogout } from './BotonLogout'
import "./Navbar.scss"
const Navbar = () => {
  const token = useSelector(state => state.auth)
  return (
    <nav className='nav' >
        <NavLink to="" activeclassname={'active'}>Home</NavLink>
        <NavLink to="accesorios" activeclassname={'active'}>Accesorios</NavLink>
        <NavLink to="aboutus" activeclassname={'active'}>About Us</NavLink>
        {!token && 
        <>
        <NavLink to="register" activeclassname={'active'}>Register</NavLink>
        <NavLink to="login" activeclassname={'active'}>Login</NavLink>
        </>
        }
        {<BotonLogout/>}
    </nav>
  )
}

export default Navbar