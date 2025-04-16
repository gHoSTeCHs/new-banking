import { Route, BrowserRouter as Router, Routes } from 'react-router';
import { AuthProvider } from './contexts/authcontext';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<AuthProvider>
			<Router>
				<div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Signup />} />
						<Route
							path="/"
							element={
								<ProtectedRoute>
									<Dashboard />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
