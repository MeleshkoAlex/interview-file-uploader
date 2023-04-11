import type { SyntheticEvent } from "react";
import cn from "classnames";
import type { IChildren } from "@/types";

import styles from "./styles.module.scss";

interface props {
	onClick?: (e?: SyntheticEvent<HTMLButtonElement>) => void;
	className?: string;
	type?: "submit" | "button";
	children?: IChildren;
	disabled?: boolean;
}

const Button: React.FC<props> = ({
	type = "button",
	onClick,
	className,
	disabled,
	children
}) => (
	<button
		disabled={disabled}
		type={type}
		onClick={onClick}
		className={cn(styles.submit, className)}
	>
		{children}
	</button>
);

export default Button;
