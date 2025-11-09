import React, {useContext} from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext';

const PrivateRoute = ({children}) => {
  const {user} = useContext(UserContext);
  const location = useLocation();
  
  if(!user){
    return <Navigate to='/login' state={{from:location.pathname}} replace/>
  }
  
  return children
}

export default PrivateRoute
