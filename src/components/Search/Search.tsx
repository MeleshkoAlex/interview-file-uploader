import type { ChangeEvent } from "react";
import style from "./styles.module.scss";
import Button from "../Button/Button";

interface props {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
	onSubmit: () => void;
	maxLength?: number;
}

const Search: React.FC<props> = ({
	value,
	maxLength = 40,
	onChange,
	onSubmit
}) => (
	<label className={style.label}>
		<input
			onChange={onChange}
			className={style.input}
			value={value}
			type="text"
			maxLength={maxLength}
			placeholder="Search"
		/>
		<Button disabled={!value.trim()} className={style.submit} onClick={onSubmit}>
			Search
		</Button>
	</label>
);

export default Search;
