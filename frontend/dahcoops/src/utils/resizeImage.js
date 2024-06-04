const resizeImage = (element, setStdImage) => {
	const fileInput = element;
	const file = fileInput.files[0];
	const maxSize = 300;
	const quality = 0.9;

	const reader = new FileReader();

	reader.onload = () => {
		const image = new Image();

		image.onload = () => {
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');

			let { width, height } = image;
			const maxDimension = Math.max(width, height);

			if (maxDimension > maxSize) {
				const scaleRatio = maxSize / maxDimension;
				width *= scaleRatio;
				height *= scaleRatio;
			}

			// Zoom out by 10%.
			width *= 1.36;
			height *= 1.2;

			canvas.width = maxSize;
			canvas.height = maxSize;

			const x = (maxSize - width) / 2;
			const y = (maxSize - height) / 2;

			ctx.drawImage(image, x, y, width, height);

			const dataURL = canvas.toDataURL('image/jpeg', quality);
			setStdImage(dataURL);
		};

		// @ts-ignore
		image.src = reader.result;
	};

	reader.readAsDataURL(file);
};
export default resizeImage;
