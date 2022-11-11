import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <NavLink to="" activeclassname={'active'}>Home</NavLink>
        <NavLink to="accesorios" activeclassname={'active'}>Accesorios</NavLink>
        <NavLink to="aboutus" activeclassname={'active'}>About Us</NavLink>
        <NavLink to="register" activeclassname={'active'}>Register</NavLink>
        <NavLink to="login" activeclassname={'active'}>Login</NavLink>
    </nav>
  )
}

export default Navbar