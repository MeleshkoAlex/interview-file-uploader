import React, { useContext, useEffect, useState } from "react";
import type { IChildren, IGiphyItem } from "@/types";
import LocalStorage from "@/utils/LocalStorage";

import { initialUserInfo } from "./settings";

export type ICurrentUserInfo = {
	currentUserInfo: IGiphyItem;
	historyUserInfo: IGiphyItem[];
};

export type ISetCurrentUserInfo = (data: IGiphyItem) => void;

export interface IUserInfoContextProps {
	userInfo: ICurrentUserInfo;
	setCurrentUserInfo: ISetCurrentUserInfo;
}

export const UserContext = React.createContext<IUserInfoContextProps>({
	userInfo: {
		currentUserInfo: initialUserInfo,
		historyUserInfo: []
	},
	setCurrentUserInfo: () => undefined
});

export const useUserInfoContext = () => useContext(UserContext);

export const UserInfoContext: React.FC<{ children: IChildren }> = ({
	children
}) => {
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
		<UserContext.Provider value={{ userInfo, setCurrentUserInfo }}>
			{children}
		</UserContext.Provider>
	);
};
