export const loadState = <T>(key: string): T | null => {

	try {
		const storageState = localStorage.getItem(key);

		if (!storageState) {
			localStorage.removeItem(key);
			return null;
		}

		return JSON.parse(storageState);

	} catch (e) {
		console.error(e);
		return null;
	}
};

export const saveState = <T>(state: T, key: string) => {
	const stringState = JSON.stringify(state);


	localStorage.setItem(key, stringState);
};