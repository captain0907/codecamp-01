import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const Center = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 500px;
	font-size: 20px;
`;

export default function Check() {
	// const FETCH_BOARDS = gql`
	// 	query {
	// 		fetchBoards {
	// 			number
	// 			writer
	// 			title
	// 			contents
	// 		}
	// 	}
	// `;

	// const { data } = useQuery(FETCH_BOARDS);

	//* 임의로 데이터를 만들어 주었다.
	const data = [
		{ id: "1", title: "1번" },
		{ id: "2", title: "2번" },
		{ id: "3", title: "3번" },
		{ id: "4", title: "4번" },
		{ id: "5", title: "5번" },
		{ id: "6", title: "6번" },
		{ id: "7", title: "7번" },
		{ id: "8", title: "8번" },
		{ id: "9", title: "9번" },
		{ id: "10", title: "10번" },
	];

	//* 체크된 Item은 아래 배열에 들어가게 됨.
	const [checkItems, setCheckItems] = useState([]);

	//* 전체 선택 / 해제
	const handleAllCheck = (event) => {
		//* 체크를 하면
		//* data배열에 있는 모든 요소들의 id를 checkItems에 넣어 준다.
		if (event.target.checked) {
			//*여기서 바로 넣지 않고 nowCheck에 넣은 다음 setCheckItems에 넣은 이유는
			//* console.log(checkItems)를 하면 한 박자 늦게 console.log에 찍히기 때문.
			//* 그래서 따로 만들어주고 console.log(nowCheck)를 해줘야 정확한 console.log()를 볼 수 있다.
			const nowCheck = data.map((data) => data.id);
			setCheckItems(nowCheck);
			console.log(nowCheck);
			//* 체크를 풀면 배열을 비운다.
		} else {
			setCheckItems([]);
		}
	};

	//* 개별 체크
	const handleCheck = (e) => {
		if (e.target.checked) {
			//* 위와 마찬가지로 따로 nowCheck를 만들어서 정확한 console.log()를 확인했다.
			//* 구조분해 할당을 해야지 기존 값을 복원하고 넣을 수 있다.
			const nowCheck = [...checkItems, e.target.id];
			setCheckItems(nowCheck);
			console.log(nowCheck);
		} else {
			//* 이미 체크를 풀 때는 해당 아이디 값을 filter를 이용해서 배열에서 삭제한다.
			setCheckItems(checkItems.filter((el) => el !== e.target.id));
		}
	};

	return (
		<Center>
			<div>
				<input
					type="checkbox"
					onChange={handleAllCheck}
					//* 체크된 애들의 길이가 dat의 길이와 같으면 체크 아니면 풀기
					checked={checkItems.length === data.length ? true : false}
				></input>
				<span>전체선택</span>
			</div>

			{data.map((data) => (
				<div key={data.id}>
					<input
						type="checkbox"
						id={data.id}
						//*배열에 해당 id값이 없으면 체크, 있으면 풀기 방식
						checked={checkItems.includes(data.id) ? true : false}
						//* onClick으로 할시 잘 돌아가지만 브라우저 console창에 오류가 있다.
						onClick={handleCheck}
					></input>
					<span>{data.title}</span>
				</div>
			))}
		</Center>
	);
}
