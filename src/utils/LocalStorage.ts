import type { ICurrentUserInfo } from "@/state/UserInfoContext";

class LocalStorage {
	userKey = "user_info";

	getItem(key: string) {
		return window?.localStorage?.getItem(key);
	}

	setItem(key: string, value: string | object | [] | number) {
		return window?.localStorage?.setItem(key, JSON.stringify(value));
	}

	setUserInfo(data: object) {
		return this.setItem(this.userKey, data);
	}

	getUserInfo(): ICurrentUserInfo | null {
		const data = this.getItem(this.userKey);
		return (data && (JSON.parse(data) as ICurrentUserInfo)) || null;
	}
}

const Storage = new LocalStorage();

export default Storage;
