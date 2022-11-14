import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Boton from './Boton'
import { BotonLogout } from './BotonLogout'
import "./Navbar.scss"
const Navbar = () => {
  
  const {token} = useSelector(state => state.users)
  
  return (
    <nav className='nav' >
        <NavLink to=""  className={"hover"}  activeclassname={'active'}>Home</NavLink>
        <NavLink to="accesorios" className={"hover"}  activeclassname={'active'}>Clothes</NavLink>
        <NavLink to="aboutus" className={"hover"} activeclassname={'active'}>About Us</NavLink>
        {!token && 
        <>
        <NavLink to="register" className={"hover"} activeclassname={'active'}>Register</NavLink>
        <NavLink to="login" className={"hover"}  activeclassname={'active'}>Login</NavLink>
        </>
        }
        {token && <BotonLogout/>}
    </nav>
  )
}

export default Navbar