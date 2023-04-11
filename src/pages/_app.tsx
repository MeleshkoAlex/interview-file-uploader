import { type AppType } from "next/dist/shared/lib/utils";

import { useEffect, useState } from "react";
import {
	type ICurrentUserInfo,
	UserInfoContext
} from "@/state/UserInfoContext";
import { type IGiphyItem } from "@/types";
import LocalStorage from "@/utils/LocalStorage";
import "../styles/globals.css";
import { initialUserInfo } from "@/state/settings";

const MyApp: AppType = ({ Component, pageProps }) => {
	const [userInfo, setUserInfo] = useState<ICurrentUserInfo>({
		currentUserInfo: initialUserInfo,
		historyUserInfo: []
	});

	useEffect(() => {
		const initialValues = LocalStorage.getUserInfo();

		if (initialValues) {
			setUserInfo(initialValues);
		}
	}, []);

	const setCurrentUserInfo = (data: IGiphyItem) => {
		setUserInfo(state => {
			const historyUserInfo = (state.currentUserInfo?.id && [
				...state.historyUserInfo,
				{
					...state.currentUserInfo,
					date: new Date().toString()
				}
			]) || [...state.historyUserInfo];

			const newState = {
				currentUserInfo: data,
				historyUserInfo: historyUserInfo
			};

			LocalStorage.setUserInfo(newState);

			return newState;
		});
	};

	return (
		<UserInfoContext.Provider value={{ userInfo, setCurrentUserInfo }}>
			<Component {...pageProps} />
		</UserInfoContext.Provider>
	);
};

export default MyApp;
