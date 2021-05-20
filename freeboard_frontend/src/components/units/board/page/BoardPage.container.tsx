import BoardPageUI from "./BoardPage.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "./BoardPage.queries";
import { useRouter } from "next/router";
import {
	Query,
	QueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardPage() {
	const router = useRouter();
	console.log(router.query.id);

	const { data } = useQuery<Query, QueryFetchBoardArgs>(FETCH_BOARD, {
		variables: { boardId: String(router.query.id) },
	});

	const handleUpdate = () => {
		router.push(`/board/${router.query.id}/edit`);
	};

	return <BoardPageUI data={data} handleUpdate={handleUpdate}></BoardPageUI>;
}
