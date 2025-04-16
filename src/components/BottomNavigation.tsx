import React from 'react';
import { useNavigate, useLocation } from 'react-router';

const BottomNavigation: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	return (
		<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
			<button
				onClick={() => navigate('/')}
				className={`flex flex-col items-center p-2 ${
					isActive('/') ? 'text-blue-500' : 'text-gray-500'
				}`}>
				<svg
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
					/>
				</svg>
				<span className="text-xs mt-1">Home</span>
			</button>

			<button
				onClick={() => navigate('/transfers')}
				className={`flex flex-col items-center p-2 ${
					isActive('/transfers') ? 'text-blue-500' : 'text-gray-500'
				}`}>
				<svg
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
					/>
				</svg>
				<span className="text-xs mt-1">Transfer</span>
			</button>

			<button
				onClick={() => navigate('/payments')}
				className={`flex flex-col items-center p-2 ${
					isActive('/payments') ? 'text-blue-500' : 'text-gray-500'
				}`}>
				<svg
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
				<span className="text-xs mt-1">Payments</span>
			</button>

			<button
				onClick={() => navigate('/profile')}
				className={`flex flex-col items-center p-2 ${
					isActive('/profile') ? 'text-blue-500' : 'text-gray-500'
				}`}>
				<svg
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
					/>
				</svg>
				<span className="text-xs mt-1">Profile</span>
			</button>
		</div>
	);
};

export default BottomNavigation;
