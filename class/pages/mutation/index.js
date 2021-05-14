import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
export default function MutationPage() {
	const [writer, setWriter] = useState("");
	const [password, setPassword] = useState("");
	const [title, setTitle] = useState("");
	const [contents, setContents] = useState("");

	const CREATE_BOARD = gql`
		mutation zzzzzzzzzzz(
			$writer: String
			$password: String
			$title: String
			$contents: String
		) {
			createBoard(
				writer: $writer
				password: $password
				title: $title
				contents: $contents
			) {
				message
			}
		}
	`;
	const [createBoard] = useMutation(CREATE_BOARD);

	async function onClickPost() {
		try {
			const result = await createBoard({
				variables: {
					writer,
					password,
					title,
					contents,
				},
			});
			console.log(result);
		} catch (error) {
			alert(error.message);
		}
	}
	const onChangeWriter = (event) => {
		setWriter(event.target.value);
	};
	const onChangePassword = (event) => {
		setPassword(event.target.value);
	};
	const onChangeTitle = (event) => {
		setTitle(event.target.value);
	};
	const onChangeContents = (event) => {
		setContents(event.target.value);
	};
	return (
		<>
			작성자: <input type="text" onChange={onChangeWriter}></input>
			<br />
			비밀번호: <input type="password" onChange={onChangePassword}></input>
			<br />
			제목: <input type="text" onChange={onChangeTitle}></input>
			<br />
			내용: <input type="text" onChange={onChangeContents}></input>
			<br />
			<button onClick={onClickPost}>게시물 등록하기</button>
		</>
	);
}
