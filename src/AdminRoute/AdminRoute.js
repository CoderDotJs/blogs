import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../useAuth/useAuth';

const AdminRoute = ({ children }) => {
    let { user } = useAuth();
    let location = useLocation();
    const { info } = useAuth();

    console.log(user.email , info.role)
    

    if( info.role === 'Admin' && user.email){
        return children
    }
    else{
        return <Navigate to="/dashboard" state={{ from: location }} />;
    }
};

export default AdminRoute;