export const loadState = (key: string) => {

	try {
		const storageState = localStorage.getItem(key);

		if (!storageState) {
			return null;
		}

		return storageState;

	} catch (e) {
		console.error(e);
		return null;
	}
};

export function saveState<T>(state: T, key: string) {
	const stringState = JSON.stringify(state);

	localStorage.setItem(key, stringState);
}