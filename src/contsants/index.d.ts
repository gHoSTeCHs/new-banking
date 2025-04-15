export interface User {
	id: string;
	name: string;
	email: string;
	avatarUrl?: string;
}

export interface Card {
	id: string;
	userId: string;
	type: 'debit' | 'credit';
	last4: string;
	cardNumber: string;
	expiry: string;
	cvv: string;
	balance: number;
	cardHolder: string;
	isDefault: boolean;
	color: string;
}

export interface Transaction {
	id: string;
	userId: string;
	amount: number;
	type: 'deposit' | 'withdrawal' | 'transfer';
	category: string;
	merchant: string;
	description: string;
	date: string;
	status: 'pending' | 'completed' | 'failed';
	cardId?: string;
	recipientId?: string;
	fromCardId?: string;
	commission?: number;
}

export interface Contact {
	id: string;
	userId: string;
	name: string;
	email?: string;
	phone?: string;
	avatarUrl?: string;
	isFavorite: boolean;
	lastTransaction?: string;
}

export interface TransferDetails {
	amount: number;
	fromCardId: string;
	toContactId?: string;
	toCardNumber?: string;
	description?: string;
	saveAsFavorite?: boolean;
}

export interface FavoriteTransfer {
	id: string;
	userId: string;
	recipientId: string;
	recipientName: string;
	lastAmount: number;
	lastDate: string;
}
