import {Wrapper, Title, WriterWrapper, Label, Writer, Password, InputWrapper, Subject, Contents, ZipcodeWrapper, Zipcode, SearchButton, Address, Youtube, ImageWrapper, UploadButton, OptionWrapper, RadioButton, RadioLabel, CancelButton, SubmitButton, ButtonWrapper} from '../../styles/Board.write'

export default function BoardWritePage() {

  const [writer, setWriter] = useState()
  const [password, setPassword] = useState()

  const handleChangeWriter = () => {

  }

  const handleChangePassword = () => {

  }

  return (
    <Wrapper>
        <Title>게시판 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer type="text" placeholder="이름을 적어주세요." onChange={handleChangeWriter} />
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password type="password" placeholder="비밀번호를 입력해주세요." onChange={handleChangePassword} />
          </InputWrapper>
        </WriterWrapper>
    </Wrapper>
  )
}
