const useGoBack = () => {
	const goBack = () => {
		history.back();
	};

	return { goBack };
};

export default useGoBack;
