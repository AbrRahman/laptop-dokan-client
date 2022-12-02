import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import useBayer from '../hooks/useBayer';


const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBayer, isBayerLoading] = useBayer(user?.email);
    const location = useLocation();

    if (loading || isBayerLoading) {
        return <>Loading...</>
    }

    if (user && isBayer) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;