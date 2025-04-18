import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../../contexts/authcontext';

const Login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const { login } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		setIsLoading(true);

		try {
			const success = await login(email, password);
			if (success) {
				navigate('/');
			} else {
				setError('Invalid email or password');
			}
		} catch (err) {
			console.error(err);
			setError('Login failed. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 p-4">
			<div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
				<div className="text-center mb-8">
					<h1 className="text-2xl font-bold text-blue-600">ArobixBank</h1>
					<p className="text-gray-600 mt-2">Log in to your account</p>
				</div>

				{error && (
					<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
						{error}
					</div>
				)}

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-gray-700 text-sm font-medium mb-2">
							Email
						</label>
						<input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="your@email.com"
							required
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="password"
							className="block text-gray-700 text-sm font-medium mb-2">
							Password
						</label>
						<input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="••••••••"
							required
						/>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50">
						{isLoading ? 'Logging in...' : 'Log In'}
					</button>
				</form>

				<div className="mt-4 text-center">
					<p className="text-sm text-gray-600">
						Don't have an account?{' '}
						<Link to="/register" className="text-blue-600 hover:underline">
							Register
						</Link>
					</p>
				</div>

				<div className="mt-6 border-t border-gray-200 pt-4">
					<p className="text-sm text-gray-500 text-center mb-4">
						Or continue with
					</p>
					<div className="flex justify-center space-x-4">
						<button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
							<svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
								<path
									fill="#4285F4"
									d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								/>
								<path
									fill="#34A853"
									d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								/>
								<path
									fill="#FBBC05"
									d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
								/>
								<path
									fill="#EA4335"
									d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								/>
							</svg>
							Google
						</button>
						<button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
							<svg className="w-5 h-5 mr-2" fill="black" viewBox="0 0 24 24">
								<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
							</svg>
							Apple
						</button>
					</div>
				</div>

				<div className="mt-6 text-center text-xs text-gray-500">
					By clicking you agree to the{' '}
					<span className="text-blue-600">Terms of Use</span> and{' '}
					<span className="text-blue-600">Privacy Policy</span>
				</div>
			</div>
		</div>
	);
};

export default Login;
