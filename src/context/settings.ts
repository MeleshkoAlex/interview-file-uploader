const initialImages = {
	height: "",
	size: "",
	url: "",
	width: ""
};

const initialImagesFixed = {
	...initialImages,
	mp4: "",
	mp4_size: "",
	webp: "",
	webp_size: ""
};

const initialImagesDownsampled = {
	...initialImages,
	webp: "",
	webp_size: ""
};

const initialImagesLooping = {
	mp4: "",
	mp4_size: ""
};

export const initialUserInfo = {
	id: "",
	images: {
		"480w_still": initialImages,
		downsized: initialImages,
		downsized_large: initialImages,
		downsized_medium: initialImages,
		downsized_small: initialImages,
		downsized_still: initialImages,
		fixed_height: initialImagesFixed,
		fixed_height_downsampled: initialImagesDownsampled,
		fixed_height_small: initialImagesFixed,
		fixed_height_small_still: initialImages,
		fixed_height_still: initialImages,
		fixed_width: initialImagesFixed,
		fixed_width_downsampled: initialImagesDownsampled,
		fixed_width_small: initialImagesFixed,
		fixed_width_small_still: initialImages,
		fixed_width_still: initialImages,
		looping: initialImagesLooping,
		original: initialImages,
		original_mp4: initialImages,
		original_still: initialImages,
		preview: initialImages,
		preview_gif: initialImages,
		preview_webp: initialImages
	}
};
