import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <progress className="progress w-52 "></progress>
    }
    if (user) {
        return children;
    }
    return (

        <div>
            <Navigate to="/login" replace={true}></Navigate>;
        </div>
    )
};

export default PrivateRoute;