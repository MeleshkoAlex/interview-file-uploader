import axios, { type AxiosResponse } from "axios";
import querystring from "query-string";
import type { IGiphyResponse } from "@/types";
import { GIPHY_API_KEY, GIPHY_URL_API } from "@/constants";

export const getImages = async ({
	search,
	offset,
	limit = 25
}: {
	search: string;
	offset: number;
	limit?: number;
}): Promise<IGiphyResponse> => {
	const url = querystring.stringifyUrl(
		{
			url: GIPHY_URL_API,
			query: {
				api_key: GIPHY_API_KEY,
				q: search,
				offset,
				limit: limit,
				rating: "g",
				lang: "en"
			}
		},
		{
			skipEmptyString: true,
			encode: false
		}
	);
	const res: AxiosResponse<IGiphyResponse> = await axios.get(url);
	return res.data;
};
