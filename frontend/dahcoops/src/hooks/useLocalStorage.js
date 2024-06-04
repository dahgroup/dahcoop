import { useState, useEffect, useMemo } from 'preact/hooks';

const useLocalStorage = (key, initialValue = null) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error('Error retrieving data from local storage:', error);
			return initialValue;
		}
	});

	useEffect(() => {
		try {
			const serializedValue = JSON.stringify(storedValue);
			window.localStorage.setItem(key, serializedValue);
		} catch (error) {
			console.error('Error updating local storage:', error);
		}
	}, [key, storedValue]);

	const memoizedValue = useMemo(
		() => [storedValue, setStoredValue],
		[storedValue, setStoredValue]
	);

	return memoizedValue;
};

export default useLocalStorage;
