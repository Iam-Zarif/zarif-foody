/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
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
        <Navigate to='/' replace>
            
        </Navigate>
    );
};

export default PrivateRoute;