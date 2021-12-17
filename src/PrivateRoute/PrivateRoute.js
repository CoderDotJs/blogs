import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../useAuth/useAuth';

const PrivateRoute = ({ children }) => {
    let { user } = useAuth();
    let location = useLocation();

  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }else{
      return children
  }
};

export default PrivateRoute;