const QueryUI = () => {
	return (
		<div>
			<span>이름: </span>
			<input type="text" name="name" onChange={onChangeInput}></input>
			<br />
			<span>나이: </span>
			<input type="text" name="age" onChange={onChangeInput}></input>
			<br />
			<span>학교: </span>
			<input type="text" name="school" onChange={onChangeInput}></input>
			<br />
			<button onClick={onClickSubmit}>프로필 등록하기</button>
		</div>
	);
};
export default QueryUI;
