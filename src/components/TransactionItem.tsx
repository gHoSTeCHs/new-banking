import React from 'react';
import { Transaction } from '../..';
import { formatDate } from '../utils/formatters';

interface TransactionItemProps {
	transaction: Transaction;
	onClick?: () => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
	transaction,
	onClick,
}) => {
	const isNegative = transaction.amount < 0;

	const getCategoryIcon = (category: string) => {
		switch (category.toLowerCase()) {
			case 'restaurant':
				return (
					<div className="bg-red-100 p-2 rounded-full">
						<svg
							className="w-4 h-4 text-red-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
							/>
						</svg>
					</div>
				);
			case 'games':
				return (
					<div className="bg-blue-100 p-2 rounded-full">
						<svg
							className="w-4 h-4 text-blue-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
				);
			case 'entertainment':
				return (
					<div className="bg-purple-100 p-2 rounded-full">
						<svg
							className="w-4 h-4 text-purple-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
							/>
						</svg>
					</div>
				);
			case 'transfer':
				return (
					<div className="bg-green-100 p-2 rounded-full">
						<svg
							className="w-4 h-4 text-green-500"
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
					</div>
				);
			default:
				return (
					<div className="bg-gray-100 p-2 rounded-full">
						<svg
							className="w-4 h-4 text-gray-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
				);
		}
	};

	return (
		<div
			className="flex items-center justify-between p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50"
			onClick={onClick}>
			<div className="flex items-center">
				{getCategoryIcon(transaction.category)}
				<div className="ml-3">
					<p className="font-medium text-gray-800">{transaction.merchant}</p>
					<p className="text-xs text-gray-500">{transaction.category}</p>
				</div>
			</div>
			<div className="text-right">
				<p
					className={`font-medium ${
						isNegative ? 'text-red-500' : 'text-green-500'
					}`}>
					{isNegative ? '' : '+'}
					{transaction.amount.toFixed(2)}$
				</p>
				<p className="text-xs text-gray-500">{formatDate(transaction.date)}</p>
			</div>
		</div>
	);
};

export default TransactionItem;
