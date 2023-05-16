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
  ErrorMessage,
} from "./styles";

function validatePasswordConfirm(password, passwordConfirm) {
  return password === passwordConfirm
}

function Signup() {
  const [email, setEmail] = useState('')
  const [nickName, setNickName] = useState('')
  const [password, setPassword] = useState('')
  const signupMutation = useMutation(signupPost)
  const navigate = useNavigate()
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errorMessage1, setErrorMessage1] = useState('');


  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value)
  }

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

    const emailLength = email.length;
    if (emailLength < 8 || emailLength > 30) {
      setErrorMessage1("이메일은 8자에서 30자 사이여야 합니다.")
      return
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])(?=.{8,20})/
    if (!passwordRegex.test(password)) {
      setErrorMessage1("비밀번호는 8~20자의 대문자, 소문자, 숫자, 특수문자(!@#$%^&*())를 각 하나이상 포함해야 합니다.")
      return
    }

    const nickNameRegex = /^[a-zA-Z0-9_.-]{2,10}$/
    if (!nickNameRegex.test(nickName)) {
      setErrorMessage1("닉네임은 2~10자의 영문, 숫자, _, ., -만 포함해야 합니다.")
      return
    }

    if (!validatePasswordConfirm(password, passwordConfirm)) {
      setErrorMessage1("입력하신 비밀번호가 일치하지 않습니다.")
      return
    }

    signupMutation.mutate({ email, nickName, password }, {
      onSuccess: () => {
        navigate('/');
      },
      onError: (error) => {
        setErrorMessage1(error.response.data.message)
      }
    });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Image />
        <Label>친구들의 사진과 동영상을 보려면 가입하세요.</Label>
        <Input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="이메일을 입력해주세요."
        />
        <Input
          type="text"
          value={nickName}
          onChange={handleNicknameChange}
          placeholder="닉네임을 입력해주세요."
        />
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="비밀번호를 입력해주세요." />
        <Input
          type="password"
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
          placeholder="비밀번호를 다시 입력해주세요." />
        <Button type="submit">회원가입</Button>
        {errorMessage1 && <ErrorMessage>{errorMessage1}</ErrorMessage>}
      </Form>
      <StringloginButton />
    </Container>
  );
}

export default Signup;