import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    if(loading) {
        return <progress className='progress w-56'></progress>
    }

    if(user) {
        return children;
    }
  return <Navigate to="/login"> login</Navigate>
}

export default PrivateRoute