import { useState, useEffect } from "react";

const loadedImages: string[] = [];

export const useOnLoadImages = (src: string) => {
	const [isLoaded, setIsLoaded] = useState(
		!!loadedImages.find(item => item === src)
	);

	useEffect(() => {
		if (isLoaded) return;
		const imageToLoad = new Image();
		imageToLoad.src = src;
		imageToLoad.onload = () => {
			setIsLoaded(true);
			loadedImages.push(src);
		};
	}, [src, isLoaded]);

	return isLoaded;
};
