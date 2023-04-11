import { type NextPage } from "next";

import NavBar from "@/components/NavBar/NavBar";
import Playground from "@/components/Playground/Playground";
import { useUserInfoContext } from "@/context/UserInfoContext";
import type { IGiphyItem } from "@/types";

const Home: NextPage = () => {
	const { setCurrentUserInfo } = useUserInfoContext();

	const onSaveImage = (imgData: IGiphyItem) => {
		setCurrentUserInfo(imgData);
	};

	return (
		<>
			<NavBar />
			<Playground onSave={onSaveImage} />
		</>
	);
};

export default Home;
