import type { IChildren } from "@/types";

import styles from "./styles.module.scss";

interface props {
	children: IChildren;
}

const Footer: React.FC<props> = ({ children }) => (
	<div className={styles.footer}>
		<div className={styles.footer__inner}>{children}</div>
	</div>
);

export default Footer;
