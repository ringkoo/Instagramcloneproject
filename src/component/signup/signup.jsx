import React, { useState } from "react"
import { useMutation } from 'react-query'
import { signupPost } from '../../api/users'
import { useNavigate } from 'react-router-dom'
import { StringloginButton } from '../stringbutton/stringbutton'
import {
  Container,
  Form,
  Input,
  Button,
  Image,
  Label,
} from "./styles";

function Signup() {
  const [email, setEmail] = useState('')
  const [nickName, setNickName] = useState('')
  const [password, setPassword] = useState('')
  const mutation = useMutation(signupPost)
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleNicknameChange = (e) => {
    setNickName(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({ email, nickName, password }, {
      onSuccess: (data) => {
        navigate('/login');
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      }
    });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Image />
        <Label>친구들의 사진과 동영상을 보려면 가입하세요.</Label>
        <Input type="text" value={email} onChange={handleEmailChange} placeholder="이메일을 입력해주세요." />
        <Input type="text" value={nickName} onChange={handleNicknameChange} placeholder="닉네임을 입력해주세요." />
        <Input type="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호를 입력해주세요." />
        <Button type="submit">회원가입</Button>
      </Form>
      <StringloginButton />
    </Container>
  );
}

export default Signup;