import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { BotonLogout } from './BotonLogout'
import "./Navbar.scss"
import {FaUser} from 'react-icons/fa'

const Navbar = () => {
  
  const {token, users} = useSelector(state => state.users)
  
  return (
    <nav className='nav' >
        <NavLink to="" activeclassname={'active'}>Home</NavLink>
        <NavLink to="ropa" activeclassname={'active'}>Ropa</NavLink>
        <NavLink to="aboutus" activeclassname={'active'}>About Us</NavLink>
        {users?.rol === 'admin' && <NavLink to="createropa" activeclassname={'active'}>Crear nueva ropa</NavLink>}
        {!token && 
        <>
        <NavLink to="register" activeclassname={'active'}>Register</NavLink>
        <NavLink to="login" activeclassname={'active'}>Login</NavLink>
        </>
        }
        <div className='user-log'>
        {users && <p className='user'>Sesion Iniciada: <FaUser/>  {users.userName}</p>}
        {token && <BotonLogout/>}
        </div>
       
        
        
    </nav>
  )
}

export default Navbar