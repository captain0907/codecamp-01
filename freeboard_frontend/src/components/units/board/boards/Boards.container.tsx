import BoardsUI from "./Boards.presenter";
import { FETCH_BOARDS } from "./Boards.queries";
import { useQuery } from "@apollo/client";
import { Query } from "../../../../commons/types/generated/types";

export default function Boards() {
	const { data } = useQuery<Query>(FETCH_BOARDS);

	return <BoardsUI data={data}></BoardsUI>;
}
