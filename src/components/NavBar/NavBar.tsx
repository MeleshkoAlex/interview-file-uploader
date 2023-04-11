import { memo, useRef, useState } from "react";
import isEqual from "react-fast-compare";
import Image from "next/image";
import styles from "./styles.module.scss";
import defaultAvatar from "@/assets/images/blank-profile-picture-973460__340.webp";
import { useUserInfoContext } from "@/context/UserInfoContext";
import HistoryAvatars from "../HistoryAvatars/HistoryAvatars";
import useOnClickOutside from "@/hooks/useOnClickOutside";

const NavBar: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [openHistory, setOpenHistory] = useState(false);
	const {
		userInfo: { currentUserInfo, historyUserInfo }
	} = useUserInfoContext();
	const avatar = currentUserInfo?.images?.fixed_width_small?.url;
	const hoverAvatar = currentUserInfo?.images?.downsized_medium?.url;

	const onOpenHistory = () => {
		setOpenHistory(true);
	};

	const onCloseHistory = () => {
		setOpenHistory(false);
	};

	useOnClickOutside(ref, onCloseHistory);

	return (
		<header className={styles.header}>
			<HistoryAvatars ref={ref} open={openHistory} data={historyUserInfo} />
			{!!historyUserInfo.length && (
				<button className={styles.show_btn} onClick={onOpenHistory}>
					Show History
				</button>
			)}
			<div className={styles.user}>
				<Image
					className={styles.avatar}
					src={avatar || defaultAvatar.src}
					width={70}
					height={70}
					alt=""
				/>
				<div className={styles.hover_block}>
					<Image
						fill
						className={styles.avatar_large}
						src={hoverAvatar || defaultAvatar.src}
						alt=""
					/>
				</div>
			</div>
		</header>
	);
};

export default memo(NavBar, isEqual);
