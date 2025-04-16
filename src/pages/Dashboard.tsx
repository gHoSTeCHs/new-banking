import { useState } from 'react';
import images from '../contsants/images';
import { Bell, HomeIcon, QrCode } from 'lucide-react';

export default function BankingApp() {
	const [activeTab, setActiveTab] = useState('home');

	const transactions = [
		{ id: 1, name: 'DoorDash', amount: -10.5, icon: 'red', date: 'January 29' },
		{
			id: 2,
			name: 'PlayStation Plus Essentials',
			amount: -14.99,
			icon: 'blue',
			date: 'January 27',
		},
		{
			id: 3,
			name: 'UFC Fight Pass',
			amount: -9.99,
			icon: 'black',
			date: 'January 25',
		},
	];

	const contacts = [
		{ id: 1, name: 'New Transfer', image: null, isAdd: true },
		{ id: 2, name: 'Maria Hernandez', image: images.user5 },
		{ id: 3, name: 'Jamie Burton', image: images.user7 },
		{ id: 4, name: 'Olivia Jones', image: images.user9 },
	];

	return (
		<div className="flex flex-col h-screen bg-gradient-to-br from-orange-100 to-amber-50 max-w-md mx-auto">
			{/* Header */}
			<div className="flex justify-between items-center px-4 pt-4 pb-4">
				<div>
					<p className="text-sm text-gray-500 font-medium">Hey Avatar!</p>
					<h1 className="text-xl font-bold text-gray-800">Welcome Back!</h1>
				</div>
				<div className="flex space-x-2">
					<button
						className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100"
						title="button">
						<QrCode />
					</button>
					<button
						className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100"
						title="button">
						<Bell />
					</button>
				</div>
			</div>

			{/* Wallets Section */}
			<div className="px-4 mb-4">
				<div className="flex justify-between items-center mb-3">
					<h2 className="font-bold text-gray-800">My Wallets</h2>
					<button className="text-sm text-blue-600 font-medium">Add New</button>
				</div>

				{/* ArobixBank Card */}
				<div className="h-44 max-w-[320px] bg-yellow-400 rounded-2xl p-4 relative overflow-hidden">
					<div className="absolute -bottom-1 left-4">
						<div className="flex gap-4">
							<div className="w-3.5 h-10 bg-black transform skew-x-12 translate-x-2 translate-y-2"></div>
							<div className="w-3.5 h-10 bg-black transform skew-x-12 translate-x-2 translate-y-2"></div>
							<div className="w-3.5 h-10 bg-black transform skew-x-12 translate-x-2 translate-y-2"></div>
							<div className="w-3.5 h-10 bg-black transform skew-x-12 translate-x-2 translate-y-2"></div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<div>
							<h3 className="font-bold text-lg text-gray-800">ArobixBank</h3>
						</div>
						<div>
							<div>
								<div className="flex ">
									<div className="h-7 w-7 bg-black rounded-full flex items-center justify-center z-10"></div>
									<div className="h-7 w-7 -ml-2 bg-white rounded-full"></div>
								</div>
								<p className="text-xs font-semibold text-gray-600 italic">
									mastercard
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Contacts Section */}
			<div className="px-4 overflow-x-auto">
				<div className="flex space-x-4 mb-4">
					{contacts.map((contact) => (
						<div key={contact.id} className="flex flex-col items-center">
							{contact.isAdd ? (
								<div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-300 border-dashed flex items-center justify-center mb-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round">
										<line x1="12" y1="5" x2="12" y2="19"></line>
										<line x1="5" y1="12" x2="19" y2="12"></line>
									</svg>
								</div>
							) : (
								<div className="w-12 h-12 rounded-full bg-gray-200 mb-1 overflow-hidden">
									{contact.image && (
										<img
											src={contact.image}
											alt={contact.name}
											className="w-full h-full object-cover"
										/>
									)}
								</div>
							)}
							<span className="text-xs text-center w-16 truncate">
								{contact.name}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Transactions Section */}
			<div className="px-4 flex-1 overflow-y-auto">
				<div className="flex justify-between items-center mb-2">
					<h2 className="font-bold text-gray-800">Last Transactions</h2>
					<button className="text-sm text-blue-600 font-medium">
						Show all
					</button>
				</div>

				<div className="space-y-3">
					{transactions.map((transaction) => (
						<div
							key={transaction.id}
							className="flex items-center justify-between">
							<div className="flex items-center">
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
										transaction.icon === 'red'
											? 'bg-red-500'
											: transaction.icon === 'blue'
											? 'bg-blue-500'
											: 'bg-black'
									}`}>
									{transaction.icon === 'red' && (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M12 2L2 7l10 5 10-5-10-5z"></path>
											<path d="M2 17l10 5 10-5"></path>
											<path d="M2 12l10 5 10-5"></path>
										</svg>
									)}
									{transaction.icon === 'blue' && (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
											<polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
											<polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
											<polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
											<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
											<line x1="12" y1="22.08" x2="12" y2="12"></line>
										</svg>
									)}
									{transaction.icon === 'black' && (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M12 2L2 7l10 5 10-5-10-5z"></path>
											<path d="M2 17l10 5 10-5"></path>
											<path d="M2 12l10 5 10-5"></path>
										</svg>
									)}
								</div>
								<div>
									<p className="font-medium text-sm">{transaction.name}</p>
									<p className="text-xs text-gray-500">{transaction.date}</p>
								</div>
							</div>
							<span className="font-bold text-sm">
								{transaction.amount.toFixed(2)}$
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Bottom Navigation */}
			<div className="flex justify-around items-center bg-white border-t border-gray-200 p-3">
				<button
					className={`flex flex-col items-center ${
						activeTab === 'home' ? 'text-blue-600' : 'text-gray-500'
					}`}
					onClick={() => setActiveTab('home')}>
					<HomeIcon />
					<span className="text-xs mt-1">Home</span>
				</button>
				<button
					className={`flex flex-col items-center ${
						activeTab === 'transfer' ? 'text-blue-600' : 'text-gray-500'
					}`}
					onClick={() => setActiveTab('transfer')}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
						<polyline points="10 17 15 12 10 7"></polyline>
						<line x1="15" y1="12" x2="3" y2="12"></line>
					</svg>
					<span className="text-xs mt-1">Transfer</span>
				</button>
				<button
					className={`flex flex-col items-center ${
						activeTab === 'analytics' ? 'text-blue-600' : 'text-gray-500'
					}`}
					onClick={() => setActiveTab('analytics')}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
					</svg>
					<span className="text-xs mt-1">Payments</span>
				</button>
				<button
					className={`flex flex-col items-center ${
						activeTab === 'profile' ? 'text-blue-600' : 'text-gray-500'
					}`}
					onClick={() => setActiveTab('profile')}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
						<circle cx="12" cy="7" r="4"></circle>
					</svg>
					<span className="text-xs mt-1">Profile</span>
				</button>
			</div>
		</div>
	);
}
