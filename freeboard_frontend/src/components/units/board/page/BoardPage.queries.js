import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
	query fetchBoards {
		fetchBoards {
			writer
		}
	}
`;

export const FETCH_BOARD = gql`
	query fetchBoard {
		fetchBoard(boardId: "609b615bc9f6ad002a465642") {
			writer
			title
			contents
			createdAt
		}
	}
`;
