import RcPagination, { type PaginationProps } from "rc-pagination";
import cn from "classnames";

import styles from "./styles.module.scss";

interface props extends Partial<PaginationProps> {
	limit?: number;
	total?: number;
}

const Pagination: React.FC<props> = ({ className, total, limit, ...props }) => {
	const _total = total && total > 5000 ? 5000 : total || 0;
	return (
		<div className={styles.wrapper}>
			<RcPagination
				pageSize={limit}
				total={_total}
				{...props}
				className={cn(styles.pagination, className)}
			/>
		</div>
	);
};

export default Pagination;
