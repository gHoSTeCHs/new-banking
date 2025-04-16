import React from 'react';

interface ContactAvatarProps {
	name: string;
	imageUrl?: string;
	size?: 'sm' | 'md' | 'lg';
	className?: string;
}

const ContactAvatar: React.FC<ContactAvatarProps> = ({
	name,
	imageUrl,
	size = 'md',
	className = '',
}) => {
	const initials = name
		.split(' ')
		.map((part) => part[0])
		.join('')
		.toUpperCase()
		.slice(0, 2);

	const sizeClasses = {
		sm: 'w-8 h-8 text-xs',
		md: 'w-12 h-12 text-sm',
		lg: 'w-16 h-16 text-lg',
	};

	const colorClasses = [
		'bg-blue-500',
		'bg-green-500',
		'bg-purple-500',
		'bg-pink-500',
		'bg-yellow-500',
		'bg-indigo-500',
	];

	const colorIndex =
		name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) %
		colorClasses.length;
	const bgColorClass = imageUrl ? '' : colorClasses[colorIndex];

	return (
		<div
			className={`${sizeClasses[size]} ${bgColorClass} rounded-full flex items-center justify-center text-white overflow-hidden ${className}`}>
			{imageUrl ? (
				<img src={imageUrl} alt={name} className="w-full h-full object-cover" />
			) : (
				<span className="font-medium">{initials}</span>
			)}
		</div>
	);
};

export default ContactAvatar;
