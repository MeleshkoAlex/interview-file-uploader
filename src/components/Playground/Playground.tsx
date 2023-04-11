import { useState, type ChangeEvent, useCallback, useRef } from "react";

import Search from "@/components/Search";
import ImagesContainer from "@/components/ImagesContainer/ImagesContainer";
import type { IGiphyItem, IGiphyPagination } from "@/types";
import Pagination from "@/components/Pagination/Pagination";
import Button from "@/components/Button/Button";
import { getImages } from "@/api/actions";

import styles from "./styles.module.scss";
import Footer from "./Components/Footer";
import { SIZE, initialPagination } from "./Playground.settings";
import { useUserInfoContext } from "@/context/UserInfoContext";

interface Props {
	onSave: (selectedAvatar: IGiphyItem) => void;
}

const Playground: React.FC<Props> = ({ onSave }) => {
	const canDisplayedContent = useRef(false);
	const {
		userInfo: { currentUserInfo }
	} = useUserInfoContext();
	const [images, setImages] = useState<IGiphyItem[] | undefined>();
	const [searchValue, setSearchValue] = useState("");
	const [pagination, setPagination] =
		useState<IGiphyPagination>(initialPagination);
	const [selectedAvatar, setSelectedAvatar] = useState<IGiphyItem | null>();

	const onFetchData = async ({
		search = searchValue,
		offset = pagination.offset
	}: {
		search?: string;
		offset?: number;
	} = {}) => {
		try {
			const data = await getImages({
				search,
				offset
			});
			setImages(data.data);
			setPagination(data.pagination);
			canDisplayedContent.current = true;
		} catch (err) {
			alert(JSON.stringify(err));
		}
	};

	const onSubmitSearch = () => {
		setSelectedAvatar(null);
		void onFetchData({
			offset: 0
		});
	};

	const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target;
		const value = target.value;
		setSearchValue(value);
	};

	const handlePageChange = (current: number) => {
		const newOffset = ((current - 1) * SIZE) % pagination.total_count;
		void onFetchData({ offset: newOffset });
	};

	const handleSelectImage = useCallback((data: IGiphyItem) => {
		setSelectedAvatar(data);
	}, []);

	const handleSaveImage = () => {
		if (selectedAvatar) {
			onSave(selectedAvatar);
		}
	};

	const canDisplayedFooter = !!pagination.total_count || !!selectedAvatar;

	return (
		<div className={styles.wrapper}>
			<Search
				value={searchValue}
				onChange={handleChangeSearch}
				onSubmit={onSubmitSearch}
			/>
			{canDisplayedContent.current && (
				<ImagesContainer
					selectedAvatar={selectedAvatar}
					images={images}
					onSelect={handleSelectImage}
				/>
			)}

			{canDisplayedFooter && (
				<Footer>
					<>
						{!!pagination.total_count && (
							<Pagination
								current={pagination.offset / SIZE + 1}
								onChange={handlePageChange}
								limit={SIZE}
								total={pagination.total_count}
							/>
						)}
						{selectedAvatar && (
							<Button
								disabled={currentUserInfo?.id === selectedAvatar.id}
								onClick={handleSaveImage}
							>
								Save
							</Button>
						)}
					</>
				</Footer>
			)}
		</div>
	);
};

export default Playground;
