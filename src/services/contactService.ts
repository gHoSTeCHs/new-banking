import { v4 as uuidv4 } from 'uuid';
import { Contact, FavoriteTransfer } from '../..';
import { CONTACTS, FAVORITE_TRANSFERS } from '../contsants/data';

export const getUserContacts = (userId: string): Promise<Contact[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const userContacts = CONTACTS.filter(
				(contact) => contact.userId === userId
			);
			resolve([...userContacts]);
		}, 500);
	});
};

export const getFavoriteContacts = (userId: string): Promise<Contact[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const favoriteContacts = CONTACTS.filter(
				(contact) => contact.userId === userId && contact.isFavorite
			);
			resolve([...favoriteContacts]);
		}, 400);
	});
};

export const getUserFavoriteTransfers = (
	userId: string
): Promise<FavoriteTransfer[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const userFavTransfers = FAVORITE_TRANSFERS.filter(
				(transfer) => transfer.userId === userId
			);
			resolve([...userFavTransfers]);
		}, 500);
	});
};

export const saveTransferAsFavorite = (
	userId: string,
	recipientName: string,
	amount: number
): Promise<FavoriteTransfer> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const newFavorite: FavoriteTransfer = {
				id: uuidv4(),
				userId,
				recipientId: uuidv4(),
				recipientName,
				lastAmount: amount,
				lastDate: new Date().toISOString(),
			};

			FAVORITE_TRANSFERS.push(newFavorite);
			resolve({ ...newFavorite });
		}, 600);
	});
};
