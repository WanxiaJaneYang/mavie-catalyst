import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function ProtectedRoute() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const location = useLocation();

	if (!isLoggedIn) {
		// Redirect them to the login page if not logged in
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return <Outlet />;
}

export default ProtectedRoute;
