import { memo, forwardRef } from "react";
import type { IGiphyItem } from "@/types";

import styles from "./styles.module.scss";
import Image from "next/image";
import moment from "moment";
import isEqual from "react-fast-compare";

interface Props {
	data?: IGiphyItem[];
	open: boolean;
}

const HistoryAvatarsComponent = forwardRef<HTMLDivElement, Props>(
	function HistoryAvatars({ open, data }, ref) {
		if (!open) return null;
		return (
			<div ref={ref} className={styles.container}>
				<div className={styles.content}>
					{data?.map(item => (
						<div key={item.id} className={styles.item}>
							<Image
								fill
								className={styles.img}
								alt={item.title || ""}
								src={item.images.downsized_medium.url}
							/>
							<span className={styles.date}>
								{moment(item.date).format("DD-MM-YYYY")}
							</span>
						</div>
					))}
				</div>
			</div>
		);
	}
);

export default memo(HistoryAvatarsComponent, isEqual);
