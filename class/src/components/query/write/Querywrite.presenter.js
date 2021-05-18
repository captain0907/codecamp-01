import { ResgisterButton } from "./QueryWrite.styles";

const QueryUI = ({ onChangeInput, onClickSubmit }) => {
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
			<ResgisterButton onClick={onClickSubmit}>프로필 등록하기</ResgisterButton>
		</div>
	);
};
export default QueryUI;
