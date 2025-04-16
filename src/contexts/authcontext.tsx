import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../..';
import { mockLogin, mockRegister, mockLogout } from '../services/authService';

interface AuthContextType {
	user: User | null;
	isAuthenticated: boolean;
	login: (email: string, password: string) => Promise<boolean>;
	register: (name: string, email: string, password: string) => Promise<boolean>;
	logout: () => void;
	loading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		setLoading(false);
	}, []);

	const login = async (email: string): Promise<boolean> => {
		setLoading(true);
		try {
			const userData = await mockLogin(email);
			setUser(userData);
			localStorage.setItem('user', JSON.stringify(userData));
			setLoading(false);
			return true;
		} catch (error) {
			console.error(error);
			setLoading(false);
			return false;
		}
	};

	const register = async (name: string, email: string): Promise<boolean> => {
		setLoading(true);
		try {
			const userData = await mockRegister(name, email);
			setUser(userData);
			localStorage.setItem('user', JSON.stringify(userData));
			setLoading(false);
			return true;
		} catch (error) {
			console.error(error);
			setLoading(false);
			return false;
		}
	};

	const logout = () => {
		mockLogout();
		setUser(null);
		localStorage.removeItem('user');
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated: !!user,
				login,
				register,
				logout,
				loading,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
