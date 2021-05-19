import BoardsUI from "./Boards.presenter";
import { FETCH_BOARDS } from "./Boards.queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export default function Boards() {
	const { data } = useQuery(FETCH_BOARDS);

	return <BoardsUI data={data}></BoardsUI>;
}
