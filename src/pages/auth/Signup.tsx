import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../../contexts/authcontext';

const Signup: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const { register } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');

		if (password !== confirmPassword) {
			setError('Passwords do not match');
			return;
		}

		setIsLoading(true);

		try {
			const success = await register(name, email, password);
			if (success) {
				navigate('/');
			} else {
				setError('Registration failed. Please try again.');
			}
		} catch (err) {
			console.error(err);
			setError('Registration failed. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 p-4">
			<div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
				<div className="text-center mb-8">
					<h1 className="text-2xl font-bold text-blue-600">ArobixBank</h1>
					<p className="text-gray-600 mt-2">Create your account</p>
				</div>

				{error && (
					<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
						{error}
					</div>
				)}

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block text-gray-700 text-sm font-medium mb-2">
							Full Name
						</label>
						<input
							id="name"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="John Doe"
							required
						/>
					</div>

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

					<div className="mb-4">
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
							minLength={6}
							required
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="confirmPassword"
							className="block text-gray-700 text-sm font-medium mb-2">
							Confirm Password
						</label>
						<input
							id="confirmPassword"
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="••••••••"
							minLength={6}
							required
						/>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50">
						{isLoading ? 'Creating account...' : 'Create Account'}
					</button>
				</form>

				<div className="mt-4 text-center">
					<p className="text-sm text-gray-600">
						Already have an account?{' '}
						<Link to="/login" className="text-blue-600 hover:underline">
							Log in
						</Link>
					</p>
				</div>

				<div className="mt-6 text-center text-xs text-gray-500">
					By registering you agree to the{' '}
					<span className="text-blue-600">Terms of Use</span> and{' '}
					<span className="text-blue-600">Privacy Policy</span>
				</div>
			</div>
		</div>
	);
};

export default Signup;
