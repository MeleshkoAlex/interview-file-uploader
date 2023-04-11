interface IGiphyUser {
	avatar_url: string;
	banner_image: string;
	banner_url: string;
	description: string;
	display_name: string;
	instagram_url: string;
	is_verified: boolean;
	profile_url: string;
	username: string;
	website_url: string;
}

interface IGiphyImage {
	height: string;
	size: string;
	url: string;
	width: string;
}

interface IGiphyImageFixed extends IGiphyImage {
	mp4: string;
	mp4_size: string;
	webp: string;
	webp_size: string;
}

interface IGiphyImageFixedDownsampled extends IGiphyImage {
	webp: string;
	webp_size: string;
}

interface IGiphyImageLooping {
	mp4: string;
	mp4_size: string;
}

export interface IGiphyImages {
	"480w_still": IGiphyImage;
	downsized: IGiphyImage;
	downsized_large: IGiphyImage;
	downsized_medium: IGiphyImage;
	downsized_small: IGiphyImage;
	downsized_still: IGiphyImage;
	fixed_height: IGiphyImageFixed;
	fixed_height_downsampled: IGiphyImageFixedDownsampled;
	fixed_height_small: IGiphyImageFixed;
	fixed_height_small_still: IGiphyImage;
	fixed_height_still: IGiphyImage;
	fixed_width: IGiphyImageFixed;
	fixed_width_downsampled: IGiphyImageFixedDownsampled;
	fixed_width_small: IGiphyImageFixed;
	fixed_width_small_still: IGiphyImage;
	fixed_width_still: IGiphyImage;
	looping: IGiphyImageLooping;
	original: IGiphyImage;
	original_mp4: IGiphyImage;
	original_still: IGiphyImage;
	preview: IGiphyImage;
	preview_gif: IGiphyImage;
	preview_webp: IGiphyImage;
}

export interface IGiphyItem {
	analytics_response_payload?: string;
	bitly_gif_url?: string;
	bitly_url?: string;
	content_url?: string;
	embed_url?: string;
	id: string;
	import_datetime?: string;
	is_sticker?: number;
	images: IGiphyImages;
	rating?: string;
	slug?: string;
	source?: string;
	source_post_url?: string;
	source_tld?: string;
	title?: string;
	trending_datetime?: string;
	type?: string;
	url?: string;
	username?: string;
	user?: IGiphyUser;
	date?: string;
}

interface IGiphyMeta {
	msg: string;
	response_id: string;
	status: number;
}

export interface IGiphyPagination {
	count: number;
	offset: number;
	total_count: number;
}

export interface IGiphyResponse {
	data: IGiphyItem[];
	meta: IGiphyMeta;
	pagination: IGiphyPagination;
}

export type IChildren = string | JSX.Element | JSX.Element[];
