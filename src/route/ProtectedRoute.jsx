import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	if (!isLoggedIn) {
		// Redirect them to the login page if not logged in
		return <Navigate to="/login" />;
	}

	return <Outlet />;
}

export default ProtectedRoute;
