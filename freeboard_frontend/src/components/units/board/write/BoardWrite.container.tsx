import BoardUI from "./BoardWrite.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { CREATE_BOARD, FETCH_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import {
	Mutation,
	MutationCreateBoardArgs,
	Query,
	QueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

function BoardWritePage() {
	const router = useRouter();

	const [createBoard] = useMutation<Mutation, MutationCreateBoardArgs>(
		CREATE_BOARD,
	);
	const [isTrue, setIsTrue] = useState(true);

	const { data } = useQuery<Query, QueryFetchBoardArgs>(FETCH_BOARD, {
		variables: { boardId: String(router.query.id) },
	});

	const [input, setInput] = useState({
		writer: "",
		password: "",
		title: "",
		contents: "",
	});

	useEffect(() => {
		setInput({
			writer: data?.fetchBoard.writer || "",
			password: "",
			title: data?.fetchBoard.title ? data.fetchBoard.title : "",
			contents: data?.fetchBoard.contents ? data.fetchBoard.contents : "",
		});
	}, [data]);

	const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newInput = {
			...input,
			[event.target.name]: event.target.value,
		};

		setInput(newInput);
		if (
			newInput.writer &&
			newInput.password &&
			newInput.title &&
			newInput.contents
		) {
			setIsTrue(false);
		} else {
			setIsTrue(true);
		}
	};

	const handleClickCreateBoard = async () => {
		try {
			const result = await createBoard({
				variables: {
					createBoardInput: {
						writer: input.writer,
						password: input.password,
						title: input.title,
						contents: input.contents,
					},
				},
			});
			alert("게시글 등록 성공");
			router.push(`/board/${result.data?.createBoard._id}`);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<BoardUI
			data={data}
			handleChangeInput={handleChangeInput}
			handleClickCreateBoard={handleClickCreateBoard}
			isTrue={isTrue}
		></BoardUI>
	);
}

export default BoardWritePage;
