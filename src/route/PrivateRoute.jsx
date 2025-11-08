import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children, user}) => {
  const location = useLocation();
  
  if(!user){
    return <Navigate to='/login' state={{from:location.pathname}} replace/>
  }
  
  return children
}

export default PrivateRoute
