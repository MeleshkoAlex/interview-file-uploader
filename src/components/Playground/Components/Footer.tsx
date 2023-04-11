import { memo } from "react";
import isEqual from "react-fast-compare";
import type { IChildren } from "@/types";

import styles from "./styles.module.scss";

interface Props {
	children: IChildren;
}

const Footer: React.FC<Props> = ({ children }) => (
	<div className={styles.footer}>
		<div className={styles.footer__inner}>{children}</div>
	</div>
);

export default memo(Footer, isEqual);
