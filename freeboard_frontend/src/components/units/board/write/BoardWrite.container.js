import BoardUI from "./BoardWrite.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { CREATE_BOARD, FETCH_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

function BoardWritePage() {
	const router = useRouter();

	const [createBoard] = useMutation(CREATE_BOARD);

	const { data } = useQuery(FETCH_BOARD, {
		variables: { boardId: router.query.id },
	});

	const [input, setInput] = useState({
		writer: "",
		password: "",
		title: "",
		content: "",
	});
	console.log(data);

	const [isTrue, setIsTrue] = useState(true);

	const handleChangeInput = (event) => {
		const newInput = {
			...input,
			[event.target.name]: event.target.value,
		};

		setInput(newInput);
		if (
			newInput.writer &&
			newInput.password &&
			newInput.title &&
			newInput.content
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
						contents: input.content,
					},
				},
			});
			alert("게시글 등록 성공");
			router.push(`/board/${result.data.createBoard._id}`);
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
