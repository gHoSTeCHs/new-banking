import { User } from '../..';
import { v4 as uuidv4 } from 'uuid';
import { USERS } from '../contsants/data';
import images from '../contsants/images';

export const mockLogin = (email: string): Promise<User> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const user = USERS.find((u) => u.email === email);
			if (user) {
				resolve({ ...user });
			} else {
				reject(new Error('Invalid email or password'));
			}
		}, 800);
	});
};

export const mockRegister = (
	name: string,
	email: string
	// password: string
): Promise<User> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (USERS.some((u) => u.email === email)) {
				reject(new Error('User already exists'));
				return;
			}

			const newUser: User = {
				id: uuidv4(),
				name,
				email,
				avatarUrl: images.user1,
			};

			USERS.push(newUser);
			resolve({ ...newUser });
		}, 800);
	});
};

export const mockLogout = (): Promise<void> => {
	return new Promise((resolve) => {
		setTimeout(resolve, 300);
	});
};
