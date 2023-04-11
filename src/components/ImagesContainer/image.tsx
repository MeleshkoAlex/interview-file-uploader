import React, { type SyntheticEvent } from "react";
import Img from "next/image";

import cn from "classnames";
import { useOnLoadImages } from "@/hooks/useOnLoadImages";

import styles from "./styles.module.scss";

interface props {
	alt?: string;
	onClick: (e?: SyntheticEvent<HTMLDivElement>) => void;
	src: string;
	style: Record<string, string>;
	isActive?: boolean;
}

const Image: React.FC<props> = ({
	onClick,
	isActive,
	style,
	src,
	alt = ""
}) => {
	const isLoaded = useOnLoadImages(src);

	return (
		<div
			className={cn(styles.item, { [styles.active as string]: isActive })}
			onClick={onClick}
		>
			{(isLoaded && (
				<Img fill style={style} className={styles.img} src={src} alt={alt} />
			)) || <div style={style} className={styles.loader}></div>}
		</div>
	);
};

export default Image;
