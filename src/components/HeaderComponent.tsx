import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/authcontext';

interface HeaderComponentProps {
	title: string;
	showBackButton?: boolean;
	showLogout?: boolean;
	rightComponent?: React.ReactNode;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
	title,
	showBackButton = false,
	showLogout = false,
	rightComponent,
}) => {
	const navigate = useNavigate();
	const { logout } = useAuth();

	const handleBack = () => {
		navigate(-1);
	};

	const handleLogout = () => {
		logout();
		navigate('/login');
	};

	return (
		<header className="bg-white p-4 flex items-center justify-between border-b border-gray-200">
			<div className="flex items-center">
				{showBackButton && (
					<button
						onClick={handleBack}
						className="mr-2 text-gray-700"
						title="button"
						type="button">
						<svg
							className="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>
				)}
				<h1 className="text-xl font-semibold text-gray-800">{title}</h1>
			</div>

			<div>
				{rightComponent}

				{showLogout && (
					<button
						onClick={handleLogout}
						className="text-gray-700"
						title="button"
						type="button">
						<svg
							className="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							/>
						</svg>
					</button>
				)}
			</div>
		</header>
	);
};

export default HeaderComponent;
