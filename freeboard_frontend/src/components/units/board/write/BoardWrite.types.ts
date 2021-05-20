import { Query } from "../../../../commons/types/generated/types";

export interface IBoardWriterProps {
	handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleClickCreateBoard: () => void;
	isTrue: boolean;
	data?: Query;
}