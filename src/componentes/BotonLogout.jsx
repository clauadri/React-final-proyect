import React, { useDebugValue } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/users/user.functions';

export const BotonLogout = () => {
    let navigateTo = useNavigate();
    const dispatch = useDispatch();

    const logOut = () =>{
      dispatch(logoutUser(navigateTo))
     
    }
  return (
    <div>
        <button onClick={logOut}>LogOut</button>
    </div>
  )
}
