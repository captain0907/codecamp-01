import { gql } from "@apollo/client";

//* 모든 게시글 가져오기
export const FETCH_BOARDS = gql`
	query fetchBoards {
		fetchBoards {
			writer
			title
			contents
			createdAt
		}
	}
`;
