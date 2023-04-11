import React, { useContext } from "react";
import { type IGiphyItem } from "@/types";
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

export const UserInfoContext = React.createContext<IUserInfoContextProps>({
	userInfo: {
		currentUserInfo: initialUserInfo,
		historyUserInfo: []
	},
	setCurrentUserInfo: () => undefined
});

export const useUserInfoContext = () => useContext(UserInfoContext);
