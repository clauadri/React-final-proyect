import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RutasSegurizadas = (componente) => {
    const {user, token} = useSelector(state => state.auth)

    if(user === null) return ( <Navigate to='/login'/>);
    if(user ) return componente
}

export default RutasSegurizadas