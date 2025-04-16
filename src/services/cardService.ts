import { Card } from '../..';
import { CARDS } from '../contsants/data';

export const getUserCards = (userId: string): Promise<Card[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const userCards = CARDS.filter((card) => card.userId === userId);
			resolve([...userCards]);
		}, 500);
	});
};

export const getCardById = (cardId: string): Promise<Card | null> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const card = CARDS.find((card) => card.id === cardId);
			resolve(card ? { ...card } : null);
		}, 300);
	});
};

export const updateCardBalance = (
	cardId: string,
	amount: number
): Promise<Card> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const cardIndex = CARDS.findIndex((card) => card.id === cardId);

			if (cardIndex === -1) {
				reject(new Error('Card not found'));
				return;
			}

			const updatedCard = {
				...CARDS[cardIndex],
				balance: CARDS[cardIndex].balance + amount,
			};

			CARDS[cardIndex] = updatedCard;
			resolve({ ...updatedCard });
		}, 600);
	});
};
