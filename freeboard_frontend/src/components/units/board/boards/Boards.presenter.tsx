import { Query } from "../../../../commons/types/generated/types";
import {
	BestCardWrapper,
	BestTitle,
	BestWrapper,
	Contents,
	Wrapper,
	BestCard,
	BestImg,
	BestCardTitle,
	BestProfileAndWriter,
	BestCardProfileImg,
	BestCardWriter,
	BestDate,
	BestLeftWrapper,
	BestRightWrapper,
	BestLike,
	BestLikeCount,
	BestContentsWrapper,
	BestBottomWrapper,
	RowWrapper,
	NumberWrapper,
	TitleWrapper,
	RowTitle,
	WriterWrapper,
	DateWrapper,
	Title,
	TableWrapper,
	Table,
} from "./Boards.style";

interface IProps {
	data?: Query;
}

export default function BoardsUI({ data }: IProps) {
	console.log(data?.fetchBoards);
	return (
		<Wrapper>
			<Contents>
				<BestWrapper>
					<BestTitle>베스트 게시글</BestTitle>
					<BestCardWrapper>
						{data?.fetchBoards.slice(0, 4).map((data) => (
							<>
								<BestCard>
									<BestImg src="/bestImage.png"></BestImg>
									<BestContentsWrapper>
										<BestCardTitle>{data.title}</BestCardTitle>
										<BestBottomWrapper>
											<BestLeftWrapper>
												<BestProfileAndWriter>
													<BestCardProfileImg src="/Smprofile.png"></BestCardProfileImg>
													<BestCardWriter>{data.writer}</BestCardWriter>
												</BestProfileAndWriter>
												<BestDate>
													Date : {data.createdAt.slice(0, 10)}
												</BestDate>
											</BestLeftWrapper>
											<BestRightWrapper>
												<BestLike src="/SMlike.png"></BestLike>
												<BestLikeCount>356</BestLikeCount>
											</BestRightWrapper>
										</BestBottomWrapper>
									</BestContentsWrapper>
								</BestCard>
							</>
						))}
					</BestCardWrapper>
				</BestWrapper>

				<Table>
					<TableWrapper>
						<NumberWrapper>
							<RowTitle>번호</RowTitle>
						</NumberWrapper>
						<TitleWrapper>
							<RowTitle>제목</RowTitle>
						</TitleWrapper>
						<WriterWrapper>
							<RowTitle>작성자</RowTitle>
						</WriterWrapper>
						<DateWrapper>
							<RowTitle>날짜</RowTitle>
						</DateWrapper>
					</TableWrapper>
					{data?.fetchBoards.slice(0, 10).map((data) => (
						<RowWrapper>
							<NumberWrapper>
								<Title>10</Title>
							</NumberWrapper>
							<TitleWrapper>
								<Title>{data.title}</Title>
							</TitleWrapper>
							<WriterWrapper>
								<Title>{data.writer}</Title>
							</WriterWrapper>
							<DateWrapper>
								<Title>{data.createdAt.slice(0, 10)}</Title>
							</DateWrapper>
						</RowWrapper>
					))}
				</Table>
			</Contents>
		</Wrapper>
	);
}
