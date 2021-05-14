import BoardUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD } from "./BoardWrite.queries";

function BoardWritePage() {
	const [input, setInput] = useState({
		writer: "",
		password: "",
		title: "",
		content: "",
	});

	const [createBoard] = useMutation(CREATE_BOARD);

	const handleChangeInput = (event) => {
		setInput((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const handleClickCreateBoard = async () => {
		try {
			await createBoard({
				variables: {
					createBoardInput: {
						writer: input.writer,
						password: input.password,
						title: input.title,
						contents: input.content,
					},
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<BoardUI
			handleChangeInput={handleChangeInput}
			handleClickCreateBoard={handleClickCreateBoard}
		></BoardUI>
	);
}

export default BoardWritePage;
