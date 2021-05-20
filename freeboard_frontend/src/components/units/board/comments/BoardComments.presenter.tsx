// import { IBoardWriterProps } from "./BoardComments.types";

import {
	Wrapper,
	DivideLine,
	Body,
	CommentsInputWrapper,
	CommentsImgAndTitle,
	CommentsImg,
	CommetnsTitle,
	StarWrapper,
	StarImg,
	CommmentsBoxWrapper,
	CommentsInput,
	CommentsBoxBottom,
	CommentsCount,
	CommentsBtn,
	CommentsWrapper,
	CommentsProfileImg,
	CommentsCenterWrapper,
	CommentsTopWrapper,
	CommentsWriterAndStar,
	CommentsWriter,
	CommentsStar,
	CommentsTopRightWrapper,
	CommentsUpdateImg,
	CommentsDeleteImg,
	CommentsText,
	CommentsDate,
} from "./BoardComments.style";

export default function BoardCommentsUI() {
	return (
		<Wrapper>
			{/* <DivideLine></DivideLine> */}
			<Body>
				<CommentsInputWrapper>
					<CommentsImgAndTitle>
						<CommentsImg src="/commentsImg.png"></CommentsImg>
						<CommetnsTitle>댓글</CommetnsTitle>
					</CommentsImgAndTitle>
					<StarWrapper>
						<StarImg src="/star.png"></StarImg>
						<StarImg src="/star.png"></StarImg>
						<StarImg src="/star.png"></StarImg>
						<StarImg src="/star.png"></StarImg>
						<StarImg src="/star.png"></StarImg>
					</StarWrapper>
					<CommmentsBoxWrapper>
						<CommentsInput placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></CommentsInput>
						<CommentsBoxBottom>
							<CommentsCount>0/100</CommentsCount>
							<CommentsBtn>등록하기</CommentsBtn>
						</CommentsBoxBottom>
					</CommmentsBoxWrapper>
				</CommentsInputWrapper>

				<CommentsWrapper>
					<CommentsProfileImg src="/profileImg.png"></CommentsProfileImg>
					<CommentsCenterWrapper>
						<CommentsTopWrapper>
							<CommentsWriterAndStar>
								<CommentsWriter>노원두</CommentsWriter>
								<StarWrapper>
									<CommentsStar src="/star.png"></CommentsStar>
									<CommentsStar src="/star.png"></CommentsStar>
									<CommentsStar src="/star.png"></CommentsStar>
									<CommentsStar src="/star.png"></CommentsStar>
									<CommentsStar src="/star.png"></CommentsStar>
								</StarWrapper>
							</CommentsWriterAndStar>
							<CommentsTopRightWrapper>
								<CommentsUpdateImg src="/pencil.png"></CommentsUpdateImg>
								<CommentsDeleteImg src="/X.png"></CommentsDeleteImg>
							</CommentsTopRightWrapper>
						</CommentsTopWrapper>
						<CommentsText>
							진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보
							부탁드립니다~!
						</CommentsText>
						<CommentsDate>2020.02.22</CommentsDate>
					</CommentsCenterWrapper>
				</CommentsWrapper>
			</Body>
		</Wrapper>
	);
}
