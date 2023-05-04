/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const location = useLocation();
  
    const{user,loader} = useContext(AuthContext);
    if(loader){
        return (
          <div
            className="radial-progress text-primary"
            style={{ "--value": 70 }}
          >
            70%
          </div>
        );
    }
    if(user){
        return children
    }
    return (
        <Navigate to='/login' state={{from:location}} replace>
            
        </Navigate>
    );
};

export default PrivateRoute;