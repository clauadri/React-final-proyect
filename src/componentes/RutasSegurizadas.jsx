import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RutasSegurizadas = (componente) => {
    const {users, token} = useSelector(state => state.auth)

    if(!users.rol === 'admin') return ( <Navigate to='/login'/>);
    if(users ) return componente
}

export default RutasSegurizadas