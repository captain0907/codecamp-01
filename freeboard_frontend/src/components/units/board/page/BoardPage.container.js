import BoardPageUI from "./BoardPage.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARD } from "./BoardPage.queries";
import { useEffect, useState } from "react";

export default function BoardPage() {
	// const { data } = useQuery(FETCH_BOARDS);
	const { data } = useQuery(FETCH_BOARD);

	const [board, setBoard] = useState();

	useEffect(() => {
		setBoard(data);
		console.log(board);
	}, board);

	return <BoardPageUI board={board}></BoardPageUI>;
}
