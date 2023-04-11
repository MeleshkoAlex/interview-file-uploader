import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import { UserInfoContext } from "@/context/UserInfoContext";

const MyApp: AppType = ({ Component, pageProps }) => (
	//I used react contex since the task does not require more powerful libraries redux, mobx or another state management
	<UserInfoContext>
		<Component {...pageProps} />
	</UserInfoContext>
);

export default MyApp;
