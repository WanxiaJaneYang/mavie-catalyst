import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import loginAction from '../thunk/authThunk'; // Assuming you have an action creator

function ProtectedRoute() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const cookieIsLoggedIn = cookie.load('isLoggedIn');
	const location = useLocation();
	const dispatch = useDispatch();
	const [shouldRedirect, setShouldRedirect] = useState(false);

	useEffect(() => {
		if (!isLoggedIn && cookieIsLoggedIn) {
			// Dispatch the login action
			dispatch(loginAction()); // Use the appropriate login action here
		} else if (!isLoggedIn && !cookieIsLoggedIn && location.pathname !== '/login') {
			// Redirect if not logged in
			setShouldRedirect(true);
		}
	}, [isLoggedIn, cookieIsLoggedIn, location.pathname, dispatch]);

	if (shouldRedirect) {
		return <Navigate to="/login" />;
	}

	return <Outlet />;
}

export default ProtectedRoute;
