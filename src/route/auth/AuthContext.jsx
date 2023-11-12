/* eslint-disable react/function-component-definition */
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userDetails, setUserDetails] = useState({});

	const login = () => setIsLoggedIn(true);
	const logout = () => setIsLoggedIn(false);

	return (
		<AuthContext.Provider value={{ isLoggedIn, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
