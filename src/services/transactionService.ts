import { TRANSACTIONS } from '../contsants/data';
import { Transaction, TransferDetails } from '../..';
import { updateCardBalance } from './cardService';

export const getUserTransactions = (userId: string): Promise<Transaction[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const userTransactions = TRANSACTIONS.filter(
				(tx) => tx.userId === userId
			);
			resolve(
				[...userTransactions].sort(
					(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
				)
			);
		}, 700);
	});
};

export const getTransactionById = (
	transactionId: string
): Promise<Transaction | null> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const transaction = TRANSACTIONS.find((tx) => tx.id === transactionId);
			resolve(transaction ? { ...transaction } : null);
		}, 400);
	});
};

export const createTransfer = async (
	userId: string,
	transferDetails: TransferDetails
): Promise<Transaction> => {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			try {
				await updateCardBalance(
					transferDetails.fromCardId,
					-transferDetails.amount
				);

				const commission =
					transferDetails.amount * 0.005 > 1
						? transferDetails.amount * 0.005
						: 1;
				// const totalDeduction = transferDetails.amount + commission;

				const transactionId = `TR${Math.floor(
					100000 + Math.random() * 900000
				)}`;
				const newTransaction: Transaction = {
					id: transactionId,
					userId,
					amount: -transferDetails.amount,
					type: 'transfer',
					category: 'Transfer',
					merchant: transferDetails.toContactId
						? 'Contact Transfer'
						: 'Bank Transfer',
					description: transferDetails.description || 'Transfer sent',
					date: new Date().toISOString(),
					status: 'completed',
					fromCardId: transferDetails.fromCardId,
					recipientId: transferDetails.toContactId,
					commission,
				};

				TRANSACTIONS.push(newTransaction);
				resolve({ ...newTransaction });
			} catch (error) {
				reject(error);
			}
		}, 1000);
	});
};
