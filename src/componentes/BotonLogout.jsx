import React from 'react'
import { useNavigate } from 'react-router-dom';

export const BotonLogout = () => {
    let navigateTo = useNavigate();
    
    const logOut = () =>{
      console.log('funciona')
      localStorage.removeItem('token')
      navigateTo('/login')
    }
  return (
    <div>
        <button onClick={logOut}>LogOut</button>
    </div>
  )
}
