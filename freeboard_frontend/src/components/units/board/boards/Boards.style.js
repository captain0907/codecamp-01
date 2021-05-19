import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	height: 2000px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Contents = styled.div`
	max-width: 1200px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const BestWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const BestTitle = styled.div`
	font-size: 36px;
	font-weight: 700;
	padding-bottom: 40px;
`;

export const BestCardWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const BestCard = styled.div`
	width: 282px;
	height: 257px;
	border-radius: 16px;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.1);
`;

export const BestImg = styled.img`
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
`;

export const BestCardTitle = styled.div`
	font-weight: 500;
	font-size: 18px;
`;

export const BestContentsWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 20px;
`;
export const BestBottomWrapper = styled.div`
	display: flex;
	padding-top: 20px;
	width: 100%;
	justify-content: space-between;
`;

export const BestProfileAndWriter = styled.div`
	display: flex;
	justify-content: space-between;
	width: 55px;
	padding-bottom: 8px;
`;
export const BestCardProfileImg = styled.img``;

export const BestCardWriter = styled.div`
	font-size: 16px;
`;

export const BestDate = styled.div`
	font-size: 12px;
	color: #828282;
`;

export const BestLeftWrapper = styled.div`
	display: flex;
	height: 50px;
	justify-content: space-between;
	flex-direction: column;
`;

export const BestRightWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 50px;
`;

export const BestLike = styled.img`
	width: 20px;
	height: 18px;
`;

export const BestLikeCount = styled.div`
	font-size: 16px;
`;

//! 테이블 구역

export const Table = styled.div`
	max-width: 1200px;
	width: 100%;
	margin-top: 40px;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
`;
export const RowWrapper = styled.div`
	display: flex;
	width: 100%;
	padding: 0px 40px;
	align-items: center;
	justify-content: space-between;
	height: 52px;
	border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

export const TableWrapper = styled.div`
	display: flex;
	width: 100%;
	padding: 0px 40px;
	align-items: center;
	justify-content: space-between;
	height: 52px;
`;
export const RowTitle = styled.div`
	font-size: 18px;
	font-weight: 500;
`;

export const NumberWrapper = styled.div`
	width: 34px;
	display: flex;
	justify-content: center;
`;

export const TitleWrapper = styled.div`
	width: 700px;
	display: flex;
	justify-content: center;
`;
export const Title = styled.div`
	font-size: 16px;
	color: #4f4f4f;
`;

export const WriterWrapper = styled.div`
	width: 200px;
	display: flex;
	justify-content: center;
`;

export const DateWrapper = styled.div`
	width: 100px;
	display: flex;
	justify-content: center;
`;

//! 써치바 구역

export const SearchWrapper = styled.div`
	width: 100%;
	display: flex;
`;

export const SearchBar = styled.input`
	max-width: 558px;
	width: 100%;
	outline: none;
	border: none;
	border-radius: 16px;
	background-color: #f2f2f2;
	height: 52px;
	padding: 14px 16px;
`;

export const DateBar = styled.input``;

export const SearchBtn = styled.button``;
