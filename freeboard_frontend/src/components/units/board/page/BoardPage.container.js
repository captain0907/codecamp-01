import BoardPageUI from "./BoardPage.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "./BoardPage.queries";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function BoardPage() {
	const router = useRouter();
	console.log(router.query.id);

	const { data } = useQuery(FETCH_BOARD, {
		variables: { boardId: router.query.id },
	});

	const [board, setBoard] = useState();
	useEffect(() => {
		setBoard(data);
	}, board);

	const handleUpdate = () => {
		router.push(`/board/${router.query.id}/edit`);
	};

	return <BoardPageUI board={board} handleUpdate={handleUpdate}></BoardPageUI>;
}
