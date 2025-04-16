import { useAuth } from '../contexts/authcontext';

import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	return <>{children}</>;
};

export default ProtectedRoute;
