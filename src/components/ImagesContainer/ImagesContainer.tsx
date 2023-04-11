import React, { memo } from "react";
import { Masonry } from "masonic";

import styles from "./styles.module.scss";
import Image from "./image";

import type { IGiphyItem } from "@/types";

interface props {
	images?: IGiphyItem[];
	selectedAvatar?: IGiphyItem | null;
	onSelect: (data: IGiphyItem) => void;
}

const ImagesContainer: React.FC<props> = ({
	images,
	selectedAvatar,
	onSelect
}) => (
	<div className={styles.container}>
		{(images?.length && (
			<Masonry
				key={images.length}
				items={images}
				className={styles.grid}
				columnGutter={15}
				render={({ data, index }) => {
					const { url, width, height } = data.images.downsized_medium;
					const style = { aspectRatio: `${width}/${height}` };
					return (
						<Image
							key={index}
							isActive={selectedAvatar?.id == data.id}
							src={url}
							style={style}
							onClick={() => {
								onSelect(data);
							}}
							alt=""
						/>
					);
				}}
			/>
		)) || (
			<div className={styles.empty}>No Items have been found by your request.</div>
		)}
	</div>
);

export default memo(ImagesContainer);
