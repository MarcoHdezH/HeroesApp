
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';

export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);
    const location = useLocation();
    return (logged)
    ? children
    : <Navigate to="/Login"/>
}