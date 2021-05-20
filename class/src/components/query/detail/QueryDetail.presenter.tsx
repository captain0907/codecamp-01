const QueryUI = ({  }) => {
	return (
		<div>
			<span>이름: </span>
			<input type="text" name="name"></input>
			<br />
			<span>나이: </span>
			<input type="text" name="age"></input>
			<br />
			<span>학교: </span>
			<input type="text" name="school"></input>
			<br />
			<button>프로필 등록하기</button>
		</div>
	);
};
export default QueryUI;
