import React from 'react';
import { Card } from '../..';

interface CardComponentProps {
	card: Card;
	showBalance?: boolean;
	className?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
	card,
	showBalance = true,
	className = '',
}) => {
	return (
		<div
			className={`relative rounded-xl p-4 ${
				card.color === 'amber-400' ? 'bg-amber-400' : 'bg-blue-500'
			} shadow-md ${className}`}>
			<div className="flex justify-between items-start">
				<div>
					<h3 className="text-lg font-bold text-gray-800">ArobixBank</h3>
					{showBalance && (
						<p className="mt-6 text-sm font-medium text-gray-700">
							Balance: ${card.balance.toFixed(2)}
						</p>
					)}
				</div>
				<div className="w-8 h-4 bg-gray-800 rounded-full">
					<div className="w-4 h-4 bg-gray-500 rounded-full ml-4"></div>
				</div>
			</div>
			<div className="mt-6">
				<div className="w-8 h-5 bg-gray-200 rounded mb-2"></div>
				<div className="flex items-center space-x-2">
					<div className="text-gray-800 font-medium">{card.cardNumber}</div>
				</div>
			</div>
			<div className="flex items-center mt-4 space-x-4">
				<div className="w-6 h-4">
					<svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
						<path
							d="M2 8H22M6 16H10M14 16H18"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						/>
					</svg>
				</div>
				<div className="flex items-center space-x-2">
					<div className="w-5 h-4">
						<svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
							<path
								d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
								stroke="currentColor"
								strokeWidth="2"
							/>
							<path
								d="M20 18C20 16.1362 19.2635 14.5701 17.9101 13.5735C16.5568 12.5769 14.8071 12 13 12H11C9.19288 12 7.4432 12.5769 6.08988 13.5735C4.73656 14.5701 4.00001 16.1362 4.00001 18"
								stroke="currentColor"
								strokeWidth="2"
							/>
						</svg>
					</div>
					<div className="w-6 h-6">
						<svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
							<path
								d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
								stroke="currentColor"
								strokeWidth="2"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 right-0 p-4">
				<div className="w-8 h-8">
					<svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
						<circle
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<circle cx="8" cy="12" r="2" fill="currentColor" />
						<circle cx="16" cy="12" r="2" fill="currentColor" />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default CardComponent;
