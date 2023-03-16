import React from 'react';
import { Redirect } from 'react-router-dom';
import LoadingSpinner from "./LoadingSpinner";

const ProtectedRoute = ({ children, isCheckingToken, isLoggedIn }) => {
    if (isCheckingToken) {
        return <LoadingSpinner />
    }

    if (isLoggedIn) {
        return children
    }

    return <Redirect to="/signin" />
}

export { ProtectedRoute };