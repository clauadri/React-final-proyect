import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { BotonLogout } from './BotonLogout'
import "./Navbar.scss"

const Navbar = () => {
  
  const {token, users} = useSelector(state => state.users)
  
  return (
    <nav className='nav' >
        <NavLink to="" activeclassname={'active'}>Home</NavLink>
        <NavLink to="ropa" activeclassname={'active'}>Ropa</NavLink>
        <NavLink to="aboutus" activeclassname={'active'}>About Us</NavLink>
        {!token && 
        <>
        <NavLink to="register" className={"hover"} activeclassname={'active'}>Register</NavLink>
        <NavLink to="login" className={"hover"}  activeclassname={'active'}>Login</NavLink>
        </>
        }
        {token && <BotonLogout/>}
        {console.log(users)}
        {users && <p>Usuario: {users.userName}</p>}
    </nav>
  )
}

export default Navbar